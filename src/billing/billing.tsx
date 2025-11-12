function Billing() {
    const bills = [
        { id: "INV-001", customer: "John Doe", amount: "$120.00", date: "2025-11-01", status: "Paid" },
        { id: "INV-002", customer: "Jane Smith", amount: "$80.00", date: "2025-11-03", status: "Pending" },
        { id: "INV-003", customer: "David Brown", amount: "$200.00", date: "2025-11-05", status: "Overdue" },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Billing
            </h1>

            {/* Billing Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Invoice ID</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Customer</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Amount</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Date</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {bills.map((bill, i) => (
                            <tr
                                key={i}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4">{bill.id}</td>
                                <td className="px-6 py-4">{bill.customer}</td>
                                <td className="px-6 py-4">{bill.amount}</td>
                                <td className="px-6 py-4">{bill.date}</td>
                                <td
                                    className={`px-6 py-4 font-medium ${bill.status === "Paid"
                                        ? "text-green-600"
                                        : bill.status === "Pending"
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {bill.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Billing;
