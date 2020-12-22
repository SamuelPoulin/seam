import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import * as path from 'path';
import { inject, injectable } from 'inversify';
import { ContentService } from '../services/content.service';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';
import multer from 'multer';

@injectable()
export class ContentController {
  router: express.Router;

  videoStorage: multer.StorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.SEAM_CONTENT_PATH + 'video/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname.replace(/ /g, '_'));
    }
  });

  pictureStorage: multer.StorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.SEAM_CONTENT_PATH + 'picture/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname.replace(/ /g, '_'));
    }
  });

  uploadVideo = multer({
    storage: this.videoStorage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'video/mp4' &&
        path.extname(file.originalname) === '.mp4'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });

  uploadPicture = multer({
    storage: this.pictureStorage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === 'image/jpeg' &&
        path.extname(file.originalname) === '.jpg'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });

  constructor(
    @inject(Types.ContentService) private contentService: ContentService,
    @inject(Types.TokenService) private tokenService: TokenService
  ) {
    this.router = express.Router();

    this.configureRouter();
  }

  private configureRouter(): void {

    this.router.all('*', (req, res, next) => {
      this.tokenService.verifyToken(String(req.query.access_token))
        .then((decodedToken) => {
          res.locals.decodedToken = decodedToken;
          next();
        })
        .catch(() => {
          res.sendStatus(httpStatus.FORBIDDEN);
        });
    });

    this.router.get('/:id', (req, res) => {
      this.contentService.getContentById(Number(req.params.id))
        .then((path) => {
          res.status(httpStatus.OK).sendFile(path, {}, (err) => {
            if (err) {
              res.sendStatus(httpStatus.NOT_FOUND);
            }
          });
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.post('/video', this.uploadVideo.single('file'),
      (req, res) => {
        if (req.file) {
          this.contentService.addVideo(
            Number(res.locals.decodedToken.userid),
            req.file.filename
          ).then((videoid) => {
            res.status(httpStatus.OK).json(videoid);
          }).catch(() => {
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
          });
        } else {
          res.sendStatus(httpStatus.NOT_ACCEPTABLE);
        }
      }
    );

    this.router.post('/picture', this.uploadPicture.single('file'),
      (req, res) => {
        if (req.file) {
          this.contentService.addPicture(
            Number(res.locals.decodedToken.userid),
            req.file.filename
          ).then((pictureid) => {
            res.status(httpStatus.OK).json(pictureid);
          }).catch(() => {
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
          });
        } else {
          res.sendStatus(httpStatus.NOT_ACCEPTABLE);
        }
      }
    );

  }
}
