import { inject, injectable } from 'inversify';
import { Customer } from '../models/customer';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';

@injectable()
export class CustomersService {
  constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) { }

  async getCustomersByUserId(userid: number): Promise<Customer[]> {
    return new Promise<Customer[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getCustomersByUserId(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const customers: Customer[] = [];

              for (let row of rows[0]) {
                customers.push(row);
              }

              resolve(customers);
            }
          });
    });
  }

  async getCustomerById(customerid: number): Promise<Customer> {
    return new Promise<Customer>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'SELECT * FROM customer WHERE id = ?',
          [customerid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              resolve(rows[0]);
            }
          });
    });
  }
}

