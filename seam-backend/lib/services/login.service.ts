import * as bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';

const atob: any = require('atob');

@injectable()
export class LoginService {

  constructor(
        @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public async authenticate(authorization: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const decodedAuth: string = atob(authorization.split(' ')[1]);
      const email: string = decodedAuth.split(':')[0];
      const password: string = decodedAuth.split(':')[1];

      this.databaseService.pool
        .query(
          'SELECT * FROM user WHERE email = ?',
          [email],
          (err, rows) => {
            if (err || !rows[0]) {
              reject(err);
            } else {
              bcrypt.compare(
                password,
                rows[0].password,
                (err: any, same: boolean) => {
                  if (same) {
                    resolve(rows[0].id);
                  } else {
                    reject(err);
                  }
                });
            }
          }
        );
    });
  }
}
