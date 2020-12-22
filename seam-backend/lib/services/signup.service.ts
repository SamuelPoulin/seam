import * as bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';
import { User } from '../models/user';
import atob from 'atob';


@injectable()
export class SignUpService {

  constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) { }

  public async createUser(auth: string, user: User): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const decodedAuth: string = atob(
        auth.split(' ')[1]
      );
      user.email = decodedAuth.split(':')[0];

      bcrypt.hash(decodedAuth.split(':')[1], 12, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          user.password = hash;
          this.databaseService.pool.query(
            'CALL insertUser(?,?,?)',
            [
              user.username,
              user.email,
              user.password
            ],
            (err, rows) => {
              if (err || !rows[0][0]) {
                reject(err);
              } else {
                resolve(rows[0][0].id);
              }
            }
          );
        }
      });
    });
  }
}
