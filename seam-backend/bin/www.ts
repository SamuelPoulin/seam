import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Server } from '../lib/server';
import Types from '../lib/inversify/types';
import { containerBootstrapper } from '../lib/inversify/inversify.config';

dotenv.config({path: path.join(__dirname, '../../server.env')});

containerBootstrapper().then((instance) => {
  instance.get<Server>(Types.Server).init();
});
