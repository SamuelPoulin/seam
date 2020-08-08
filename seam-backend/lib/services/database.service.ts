import * as mysql from 'mysql';
import { injectable } from 'inversify';

@injectable()
export class DatabaseService {
  pool: mysql.Pool;

  private options: mysql.PoolConfig = {
    connectionLimit: 25,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  };

  constructor() {
    this.pool = mysql.createPool(this.options);
  }
}
