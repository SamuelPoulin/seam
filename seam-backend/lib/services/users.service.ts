import { inject, injectable } from 'inversify';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';
import { User } from '../models/user';

@injectable()
export class UsersService {
  constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) { }

  async getFollowersById(userid: number): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getFollowersById(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const followers: User[] = [];

              for (const row of rows[0]) {
                followers.push(row);
              }

              resolve(followers);
            }
          });
    });
  }

  async getFollowerCountById(userid: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'SELECT COUNT(*) AS count FROM follow WHERE followedid = ?',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              resolve(rows[0].count);
            }
          });
    });
  }

  async getUserById(userid: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getUserById(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              resolve(rows[0][0]);
            }
          });
    });
  }
}
