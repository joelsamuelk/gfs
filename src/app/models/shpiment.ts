import { Document } from './document';

export interface Shipment {
  vessel: string;
  Port_Of_Load: string;
  Container_No: string;
  Departure: string;
  Arrival: string;
  Status: string;
  documents?: Array<Document> | undefined;
  shipping_line: string;
  suppliers: [];
  user: {};
  Container_value: number;
}
