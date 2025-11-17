import type { OrderItem } from "../Types/Order";

export default function OrderItemRow({ item }: { item: OrderItem }) {
    const addonTotal = item.addons.reduce((sum, a) => sum + a.price, 0);
    const itemTotal = (item.price + addonTotal) * item.quantity;

    return (
        <div className="border rounded p-3 bg-white shadow-sm">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-lg">{item.name}</p>

                    {/* Variant */}
                    {item.variantName && (
                        <p className="text-sm text-gray-600">
                            Variant: <span className="font-medium">{item.variantName}</span>
                        </p>
                    )}

                    {/* Addons */}
                    {item.addons.length > 0 && (
                        <div className="mt-1">
                            <p className="text-sm font-semibold">Add-ons:</p>
                            {item.addons.map((a, i) => (
                                <p key={i} className="text-sm text-gray-600">
                                    - +${a.price.toFixed(2)}
                                </p>
                            ))}
                        </div>
                    )}

                    <p className="mt-1 text-sm">Qty: {item.quantity}</p>
                </div>

                <p className="font-bold text-green-600">
                    ${itemTotal.toFixed(2)}
                </p>
            </div>
        </div>
    );
}
