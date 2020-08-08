import * as http from 'http';
import { inject, injectable } from 'inversify';
import { Application } from './app';
import Types from '../lib/inversify/types';

@injectable()
export class Server {
  private server: http.Server;
  private port: number;

  constructor(@inject(Types.Application) private application: Application) {
    this.port = 80;

    this.application.app.set('port', this.port);

    this.server = http.createServer(application.app);
    this.server.on(
      'error',
      (error: NodeJS.ErrnoException) => this.onError(error)
    );
    this.server.on('listening', () => this.onListening());
  }

  init(): void {
    this.server.listen(this.port);
  }

  close(): void {
    this.server.close();
  }

  private onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') {
      throw error;
    }
    switch (error.code) {
    case 'EACCES':
      console.error(`Port ${this.port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${this.port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
    }
  }

  private onListening(): void {
    console.log(`Listening on port ${this.port}`);
  }
}
