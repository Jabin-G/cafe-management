import type { Order } from "../Types/Order";

export const orderData: Order[] = [
  {
    id: "1001",
    status: "pending",
    total: 12.75,
    items: [
      {
        menuId: "1",
        name: "Cappuccino",
        variantId: "v2",
        variantName: "Medium",
        price: 4.0,
        quantity: 2,
        addons: [
          { addonId: "a1", price: 1.0 },
        ],
      },
      {
        menuId: "2",
        name: "Veg Sandwich",
        price: 5.0,
        quantity: 1,
        addons: [
          { addonId: "a4", price: 1.0 },
        ],
      }
    ]
  }
];
