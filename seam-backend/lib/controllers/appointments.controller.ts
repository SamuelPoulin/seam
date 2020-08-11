import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { AppointmentsService } from '../services/appointments.service';
import { TokenService } from '../services/token.service';
import Types from '../inversify/types';

@injectable()
export class AppointmentsController {
  router: express.Router;

  constructor(
    @inject(
      Types.AppointmentsService
    ) private appointmentsService: AppointmentsService,
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
      this.appointmentsService
        .getAppointmentsByUserId(Number(res.locals.decodedToken.userid))
        .then((appointments) => {
          res.status(httpStatus.OK).json(appointments);
        })
        .catch(() => {
          res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        });
    });

    this.router.get('/:year/:month', (req, res) => {
      this.appointmentsService.getMonthAppointmentsByUserId(
        Number(res.locals.decodedToken.userid),
        Number(req.params.year),
        Number(req.params.month)
      ).then((appointments) => {
        res.status(httpStatus.OK).json(appointments);
      }).catch(() => {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      });
    });
  }
}
