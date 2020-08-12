import * as express from 'express';
import { inject, injectable } from 'inversify';
import { AppointmentsController } from './appointments.controller';
import { ContentController } from './content.controller';
import { CustomersController } from './customer.controller';
import { LoginController } from './login.controller';
import { SignUpController } from './signup.controller';
import Types from '../inversify/types';
import { UsersController } from './users.controller';

@injectable()
export class APIController {
  router: express.Router;

  constructor(
    @inject(Types.LoginController) private loginController: LoginController,
    @inject(Types.SignUpController) private signUpController: SignUpController,
    @inject(Types.UsersController) private usersController: UsersController,
    @inject(
      Types.ContentController
    ) private contentController: ContentController,
    @inject(
      Types.AppointmentsController
    ) private appointmentsController: AppointmentsController,
    @inject(
      Types.CustomersController
    ) private customersController: CustomersController
  ) {
    this.router = express.Router();

    this.configureRouter();
  }

  private configureRouter(): void {
    this.router.use('/login', this.loginController.router);
    this.router.use('/signup', this.signUpController.router);
    this.router.use('/users', this.usersController.router);
    this.router.use('/content', this.contentController.router);
    this.router.use('/appointments', this.appointmentsController.router);
    this.router.use('/customers', this.customersController.router);
  }
}
