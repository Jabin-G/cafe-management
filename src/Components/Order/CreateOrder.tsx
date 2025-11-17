import { useState } from "react";
import type { MenuItem } from "../Types/Meun";
import type { Order, OrderItem } from "../Types/Order";

export default function CreateOrder({
    menu,
    onCreate,
}: {
    menu: MenuItem[];
    onCreate: (order: Order) => void;
}) {
    const [selected, setSelected] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        setSelected((prev) => [
            ...prev,
            {
                menuId: item.id,
                name: item.name,
                price: item.basePrice,
                addons: [],
                quantity: 1,
            },
        ]);
    };

    const updateVariant = (i: number, variantId: string, price: number, name: string) => {
        const newList = [...selected];
        newList[i].variantId = variantId;
        newList[i].variantName = name;
        newList[i].price = price;
        setSelected(newList);
    };

    const updateAddon = (
        i: number,
        addonId: string,
        price: number,
        checked: boolean
    ) => {
        const newList = [...selected];
        if (checked) {
            newList[i].addons.push({ addonId, price });
        } else {
            newList[i].addons = newList[i].addons.filter((a) => a.addonId !== addonId);
        }
        setSelected(newList);
    };

    const updateQty = (i: number, qty: number) => {
        const newList = [...selected];
        newList[i].quantity = qty;
        setSelected(newList);
    };

    const submitOrder = () => {
        const total = selected.reduce(
            (sum, item) =>
                sum +
                (item.price +
                    item.addons.reduce((a, b) => a + b.price, 0)) *
                item.quantity,
            0
        );

        const order: Order = {
            id: Date.now().toString(),
            items: selected,
            total,
            status: "pending",
        };

        onCreate(order);
        setSelected([]);
    };

    return (
        <div className="bg-white p-4 shadow rounded">
            <h1 className="text-xl font-bold mb-4">Create Order</h1>

            <div className="grid grid-cols-3 gap-3 mb-4">
                {menu.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => addItem(item)}
                        className="p-2 border rounded bg-gray-50 hover:bg-gray-100"
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            {selected.map((item, index) => {
                const m = menu.find((x) => x.id === item.menuId)!;
                return (
                    <div key={index} className="border rounded p-3 mb-3">
                        <h2 className="font-bold">{item.name}</h2>

                        {/* Variants */}
                        {m.variants && (
                            <div className="mt-2">
                                <p className="font-semibold">Variants</p>
                                {m.variants.map((v) => (
                                    <label key={v.id} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={`variant-${index}`}
                                            onChange={() =>
                                                updateVariant(index, v.id, v.price, v.name)
                                            }
                                        />
                                        {v.name} (${v.price})
                                    </label>
                                ))}
                            </div>
                        )}

                        {/* Add-ons */}
                        {m.addons && (
                            <div className="mt-2">
                                <p className="font-semibold">Add-ons</p>
                                {m.addons.map((a) => (
                                    <label key={a.id} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                updateAddon(index, a.id, a.price, e.target.checked)
                                            }
                                        />
                                        {a.name} (+${a.price})
                                    </label>
                                ))}
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mt-2">
                            <input
                                type="number"
                                value={item.quantity}
                                min={1}
                                onChange={(e) => updateQty(index, parseInt(e.target.value))}
                                className="border p-2 w-20 rounded"
                            />
                        </div>
                    </div>
                );
            })}

            {selected.length > 0 && (
                <button
                    onClick={submitOrder}
                    className="w-full mt-3 bg-green-600 text-white py-2 rounded"
                >
                    Submit Order
                </button>
            )}
        </div>
    );
}
