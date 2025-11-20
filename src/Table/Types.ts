export interface Table {
  id: number;
  number: string;
  seats: number;
  status: "available" | "occupied" | "reserved";
}
