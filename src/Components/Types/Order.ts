export interface SelectedAddon {
  addonId: string;
  price: number;
}

export interface OrderItem {
  menuId: string;
  name: string;
  variantId?: string;
  variantName?: string;
  price: number;
  addons: SelectedAddon[];
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "preparing" | "served" | "completed";
}
