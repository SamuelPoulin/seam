import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { ContentService } from '../services/content.service';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';
import { UsersService } from '../services/users.service';

@injectable()
export class UsersController {
  router: express.Router;

  constructor(
    @inject(Types.UsersService) private usersService: UsersService,
    @inject(Types.TokenService) private tokenService: TokenService,
    @inject(Types.ContentService) private contentService: ContentService
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
      if (res.locals.decodedToken.userid == req.params.id) {
        this.usersService.getUserById(Number(req.params.id))
          .then((user) => {
            res.status(httpStatus.OK).json(user);
          })
          .catch(() => {
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
          });
      } else {
        res.sendStatus(httpStatus.FORBIDDEN);
      }
    });
  }
}
