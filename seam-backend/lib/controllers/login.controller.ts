import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { LoginService } from '../services/login.service';
import { LoginToken } from '../models/loginToken';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';

@injectable()
export class LoginController {
  router: express.Router;

  constructor(
    @inject(Types.LoginService) private loginService: LoginService,
    @inject(Types.TokenService) private tokenService: TokenService
  ) {
    this.router = express.Router();

    this.configureRouter();
  }

  private configureRouter(): void {

    this.router.post('/', (req, res) => {
      if (req.headers.authorization) {
        this.loginService
          .authenticate(req.headers.authorization)
          .then((userid) => {
            this.tokenService.signToken(userid)
              .then((token) => {
                res.send(token);
              }).catch(() => {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
              });
          })
          .catch(() => {
            res.sendStatus(httpStatus.FORBIDDEN);
          });
      }
    });

    this.router.get('/token', (req, res) => {
      this.tokenService.verifyToken(String(req.query.access_token))
        .then((decodedToken) => {
          this.tokenService
            .signToken((decodedToken as LoginToken).userid)
            .then((token) => {
              res.send(token);
            })
            .catch(() => {
              res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            });
        })
        .catch(() => {
          res.sendStatus(httpStatus.FORBIDDEN);
        });
    });

  }
}
