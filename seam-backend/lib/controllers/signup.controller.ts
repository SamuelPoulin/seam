import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { SignUpService } from '../services/signup.service';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';

@injectable()
export class SignUpController {
  router: express.Router;

  constructor(
    @inject(Types.SignUpService) private signUpService: SignUpService,
    @inject(Types.TokenService) private tokenService: TokenService
  ) {
    this.router = express.Router();

    this.configureRouter();
  }

  private configureRouter(): void {
    this.router.post('/', (req, res) => {
      if (req.headers.authorization) {
        this.signUpService.createUser(req.headers.authorization, req.body.user)
          .then((userid) => {
            this.tokenService.signToken(userid).then((token) => {
              res.send(token);
            }).catch(() => {
              res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            });
          }).catch(() => {
            res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
          });
      } else {
        res.sendStatus(httpStatus.NOT_ACCEPTABLE);
      }
    });
  }
}
