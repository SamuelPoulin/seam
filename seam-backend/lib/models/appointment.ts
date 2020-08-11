export interface Appointment {
  id: number;
  providerid: number;
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
  customerid: number;
}
