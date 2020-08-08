import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import * as logger from 'morgan';
import { inject, injectable } from 'inversify';
import { APIController } from './controllers/api.controller';
import Types from './inversify/types';

@injectable()
export class Application {
  app: express.Application;

  constructor(
    @inject(Types.APIController) private apiController: APIController
  ) {
    this.app = express();

    this.config();
  }

  private config(): void {
    // Middlewares configuration
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json({ limit: '25mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }));
    this.app.use(cookieParser());
    this.app.use(cors());

    this.app.use('/api', this.apiController.router);

    this.errorHandling();
  }

  private errorHandling(): void {
    this.app.use((
      req: express.Request,
      res: express.Response
    ) => {
      res.sendStatus(httpStatus.NOT_FOUND);
    });
  }
}
