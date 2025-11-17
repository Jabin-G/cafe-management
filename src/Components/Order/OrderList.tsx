import * as order from "../Types/Order";
import OrderItemRow from "./OrderItem";

export default function OrderList({ orders }: { orders: order.Order[] }) {
    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <div key={order.id} className="bg-gray-100 p-4 rounded shadow">
                    <div className="flex justify-between mb-3">
                        <h2 className="font-bold text-lg">Order #{order.id}</h2>
                        <span
                            className={`px-2 py-1 rounded text-white text-sm ${order.status === "pending"
                                ? "bg-yellow-500"
                                : order.status === "preparing"
                                    ? "bg-blue-500"
                                    : order.status === "served"
                                        ? "bg-green-500"
                                        : "bg-gray-600"
                                }`}
                        >
                            {order.status}
                        </span>
                    </div>

                    <div className="space-y-3">
                        {order.items.map((item, i) => (
                            <OrderItemRow key={i} item={item} />
                        ))}
                    </div>

                    <p className="mt-3 font-bold text-right text-green-700">
                        Total: ${order.total.toFixed(2)}
                    </p>
                </div>
            ))}
        </div>
    );
}
