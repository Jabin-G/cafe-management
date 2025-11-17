export interface MenuAddon {
  id: string;
  name: string;
  price: number;
}

export interface MenuVariant {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  basePrice: number;
  category: string;
  image?: string;
  available: boolean;
  variants?: MenuVariant[];
  addons?: MenuAddon[];
}
