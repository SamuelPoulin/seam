import 'reflect-metadata';
import { APIController } from '../controllers/api.controller';
import { Application } from '../app';
import { Container } from 'inversify';
import { ContentController } from '../controllers/content.controller';
import { ContentService } from '../services/content.service';
import { DatabaseService } from '../services/database.service';
import { LoginController } from '../controllers/login.controller';
import { LoginService } from '../services/login.service';
import { Server } from '../server';
import { SignUpController } from '../controllers/signup.controller';
import { SignUpService } from '../services/signup.service';
import { TokenService } from '../services/token.service';
import Types from './types';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';


export const containerBootstrapper: () => Promise<Container> = async () => {
  const container: Container = new Container();

  container.bind(Types.Server).to(Server);
  container.bind(Types.Application).to(Application);
  container.bind(Types.APIController).to(APIController);
  container.bind(Types.LoginController).to(LoginController);
  container.bind(Types.LoginService).to(LoginService);
  container.bind(Types.DatabaseService).to(DatabaseService);
  container.bind(Types.UsersController).to(UsersController);
  container.bind(Types.UsersService).to(UsersService);
  container.bind(Types.TokenService).to(TokenService);
  container.bind(Types.ContentController).to(ContentController);
  container.bind(Types.ContentService).to(ContentService);
  container.bind(Types.SignUpController).to(SignUpController);
  container.bind(Types.SignUpService).to(SignUpService);

  return container;
};
