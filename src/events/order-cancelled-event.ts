import { OrderStatus } from '..';
import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
    id: string;
    ticket: {
      id: string;
    };

}
