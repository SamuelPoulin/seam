import * as path from 'path';
import { inject, injectable } from 'inversify';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';

@injectable()
export class ContentService {
  constructor(
        @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  private getVideoPath(filename: string, extension: string): string {
    return process.env.TRENDIT_CONTENT_PATH +
    'video/' +
    filename +
    '.' +
    extension;
  }

  private getPicturePath(filename: string, extension: string): string {
    return process.env.TRENDIT_CONTENT_PATH +
    'picture/' +
    filename +
    '.' +
    extension;
  }

  public async getContentById(contentid: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.databaseService.pool.query(
        'CALL getContentById(?)',
        [contentid],
        (err, rows) => {
          if (err || !rows) {
            reject(err);
          } else {
            if (rows[0][0].type == 'PICTURE') {
              resolve(
                this.getPicturePath(rows[0][0].filename, rows[0][0].extension)
              );
            } else if (rows[0][0].type == 'VIDEO') {
              resolve(
                this.getVideoPath(rows[0][0].filename, rows[0][0].extension)
              );
            } else {
              reject();
            }
          }
        }
      );
    });
  }

  public async addVideo(userid: number, filename: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.databaseService.pool.query(
        'CALL insertContent(?, ?, ?, ?)',
        [
          userid,
          path.basename(filename, path.extname(filename)),
          path.extname(filename).split('.')[1],
          'VIDEO'
        ],
        (err, rows) => {
          if (err || !rows) {
            reject(err);
          } else {
            resolve(rows[0][0].id);
          }
        }
      );
    });
  }

  public async addPicture(userid: number, filename: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.databaseService.pool.query(
        'CALL insertContent(?, ?, ?, ?)',
        [
          userid,
          path.basename(filename, path.extname(filename)),
          path.extname(filename).split('.')[1],
          'PICTURE'
        ],
        (err, rows) => {
          if (err || !rows) {
            reject(err);
          } else {
            resolve(rows[0][0].id);
          }
        }
      );
    });
  }
}
