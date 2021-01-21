import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { Server } from '../lib/server';
import Types from '../lib/inversify/types';
import { containerBootstrapper } from '../lib/inversify/inversify.config';

dotenv.config({path: __dirname + '/../.env'});

containerBootstrapper().then((instance) => {
  instance.get<Server>(Types.Server).init();
});
