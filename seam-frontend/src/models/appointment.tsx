import { Provider } from "./provider";
import { Customer } from "./customer";
import { AppointmentQuestion } from "./appointment-question";

export interface Appointment {
  id?: number;
  provider: Provider;
  companyName?: string;
  description?: string;
  location?: string;
  startTime: Date;
  endTime: Date;
  customer?: Customer;
  questions?: AppointmentQuestion[];
}