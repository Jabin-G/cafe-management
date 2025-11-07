function Billing() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 items-center">Billing</h1>

            {/* Example Billing Table */}
            <table className="w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border-b">Invoice ID</th>
                        <th className="p-3 border-b">Customer</th>
                        <th className="p-3 border-b">Amount</th>
                        <th className="p-3 border-b">Date</th>
                        <th className="p-3 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { id: "INV-001", customer: "John Doe", amount: "$120.00", date: "2025-11-01", status: "Paid" },
                        { id: "INV-002", customer: "Jane Smith", amount: "$80.00", date: "2025-11-03", status: "Pending" },
                        { id: "INV-003", customer: "David Brown", amount: "$200.00", date: "2025-11-05", status: "Overdue" },
                    ].map((bill, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="p-3 border-b">{bill.id}</td>
                            <td className="p-3 border-b">{bill.customer}</td>
                            <td className="p-3 border-b">{bill.amount}</td>
                            <td className="p-3 border-b">{bill.date}</td>
                            <td
                                className={`p-3 border-b font-medium ${bill.status === "Paid"
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
    );
}

export default Billing;
