import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { CustomersService } from '../services/customers.service';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';

@injectable()
export class CustomersController {
  router: express.Router;

  constructor(
    @inject(
      Types.CustomersService
    ) private customersService: CustomersService,
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

    this.router.get('/', (req, res) => {
      this.customersService
        .getCustomersByUserId(Number(res.locals.decodedToken.userid))
        .then((customers) => {
          res.status(httpStatus.OK).json(customers);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:id', (req, res) => {
      this.customersService.getCustomerById(Number(req.params.id))
        .then((customer) => {
          res.status(httpStatus.OK).json(customer);
        }).catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    })
  }
}
