import { inject, injectable } from 'inversify';
import { Appointment } from '../models/appointment';
import { DatabaseService } from './database.service';
import Types from '../inversify/types';

@injectable()
export class AppointmentsService {
  constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) { }

  async getAppointmentsByUserId(userid: number): Promise<Appointment[]> {
    return new Promise<Appointment[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getAppointmentsByUserId(?)',
          [userid],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const appointments: Appointment[] = [];

              for (let row of rows[0]) {
                appointments.push(row);
              }

              resolve(appointments);
            }
          });
    });
  }

  async getMonthAppointmentsByUserId(
    userid: number,
    year: number,
    month: number
  ): Promise<Appointment[]> {
    return new Promise<Appointment[]>((resolve, reject) => {
      this.databaseService.pool
        .query(
          'CALL getMonthAppointmentsByUserId(?,?,?)',
          [userid, year, month],
          (err, rows) => {
            if (err || !rows) {
              reject(err);
            } else {
              const appointments: Appointment[] = [];

              for (let row of rows[0]) {
                appointments.push(row);
              }

              resolve(appointments);
            }
          }
        );
    });
  }
}

