export interface Vendor {
  id: string;
  name: string;
  phone: string;
  status: "active" | "inactive";
}

export interface PurchaseOrder {
  id: string;
  vendor: string;
  amount: number;
  status: "approved" | "pending";
}
