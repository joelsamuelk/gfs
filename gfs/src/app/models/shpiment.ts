import { Document } from './document';
import { User } from 'src/app/models/user.model';

export interface Shipment {
  vessel: string
  Port_Of_Load: string
  Container_No: string
  Departure: string
  Arrival: string
  Status: string
  Documents?: Array<Document> | undefined
  Shipping_Line: string
  suppliers: []
  user: User
}
