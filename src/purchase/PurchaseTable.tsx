import type { PurchaseOrder } from "./types";

interface Props {
    purchases: PurchaseOrder[];
}

const PurchaseTable = ({ purchases }: Props) => {
    return (
        <div className="bg-white shadow rounded p-4 mt-6">
            <h2 className="text-lg font-semibold mb-3">Purchase Orders</h2>

            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="p-2 text-left">PO ID</th>
                        <th className="p-2 text-left">Vendor</th>
                        <th className="p-2 text-left">Amount</th>
                        <th className="p-2 text-left">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {purchases.map((po) => (
                        <tr key={po.id} className="border-b">
                            <td className="p-2">{po.id}</td>
                            <td className="p-2">{po.vendor}</td>
                            <td className="p-2">${po.amount}</td>
                            <td className="p-2">
                                <span
                                    className={`px-2 py-1 rounded text-sm ${po.status === "approved"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {po.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseTable;
