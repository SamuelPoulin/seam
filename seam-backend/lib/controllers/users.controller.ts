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

    this.router.all('*', ( req, res, next) => {
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

    this.router.get('/:id/profile', (req, res) => {
      this.usersService.getUserById(Number(req.params.id))
        .then((user) => {
          res.status(httpStatus.OK).json({
            id: user.id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            biography: user.biography,
            pictureid: user.pictureid,
            collegeid: user.collegeid,
            followers: user.followers,
            following: user.following,
            graduate: user.graduate,
            verified: user.verified
          });
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/picture', (req, res) => {
      this.usersService.getUserById(Number(req.params.id))
        .then((user) => {
          this.contentService.getContentById(user.pictureid)
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
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/followers', (req, res) => {
      this.usersService.getFollowersById(Number(req.params.id))
        .then((followers) => {
          res.status(httpStatus.OK).json(followers);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/following', (req, res) => {
      this.usersService.getFollowingById(Number(req.params.id))
        .then((following) => {
          res.status(httpStatus.OK).json(following);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/followers/count', (req, res) => {
      this.usersService.getFollowerCountById(Number(req.params.id))
        .then((followerCount) => {
          res.status(httpStatus.OK).json(followerCount);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/following/count', (req, res) => {
      this.usersService.getFollowingCountById(Number(req.params.id))
        .then((followingCount) => {
          res.status(httpStatus.OK).json(followingCount);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/posts', (req, res) => {
      this.usersService.getPostsById(Number(req.params.id))
        .then((posts) => {
          res.status(httpStatus.OK).json(posts);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id/posts/count', (req, res) => {
      this.usersService.getPostCountById(Number(req.params.id))
        .then((postCount) => {
          res.status(httpStatus.OK).json(postCount);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

  }
}
