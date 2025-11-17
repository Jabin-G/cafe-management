import type { MenuItem } from "../Types/Meun";

export const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Cappuccino",
    basePrice: 3.5,
    category: "Coffee",
    available: true,
    variants: [
      { id: "v1", name: "Small", price: 3.5 },
      { id: "v2", name: "Medium", price: 4.0 },
      { id: "v3", name: "Large", price: 4.5 },
    ],
    addons: [
      { id: "a1", name: "Extra Shot", price: 1.0 },
      { id: "a2", name: "Soy Milk", price: 0.5 },
      { id: "a3", name: "Whipped Cream", price: 0.75 }
    ]
  },
  {
    id: "2",
    name: "Veg Sandwich",
    basePrice: 5.0,
    category: "Food",
    available: true,
    addons: [
      { id: "a4", name: "Extra Cheese", price: 1.0 },
      { id: "a5", name: "Extra Veggies", price: 0.75 }
    ]
  }
];
