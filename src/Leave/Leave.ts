export interface Leave {
  id: number;
  employeeName: string;
  type: string; // e.g. "Sick", "Casual", "Annual"
  startDate: string;
  endDate: string;
  status: "Pending" | "Approved" | "Rejected";
  reason: string;
}
