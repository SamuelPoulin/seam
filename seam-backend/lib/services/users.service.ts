import { inject, injectable } from 'inversify';
import { DatabaseService } from './database.service';
import { Post } from '../models/post';
import Types from '../inversify/types';
import { User } from '../models/user';

@injectable()
export class UsersService {
  constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

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

  async getFollowingById(userid: number): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getFollowingById(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const following: User[] = [];

              for (const row of rows[0]) {
                following.push(row);
              }

              resolve(following);
            }
          });
    });
  }

  async getFollowingCountById(userid: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'SELECT COUNT(*) AS count FROM follow WHERE followerid = ?',
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

  async getPostsById(userid: number): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getPostsById(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const posts: Post[] = [];

              for (const row of rows[0]) {
                posts.push(row);
              }

              resolve(posts);
            }
          }
        );
    });
  }

  async getPostCountById(userid: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'SELECT COUNT(*) AS count FROM post WHERE userid = ?',
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
}
