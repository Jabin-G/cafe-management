import { useState, useEffect, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";

function Billing() {
    // Load bills from localStorage
    const [bills, setBills] = useState(() => {
        const savedBills = localStorage.getItem("bills");
        return savedBills ? JSON.parse(savedBills) : [];
    });

    // Form inputs
    const [newBill, setNewBill] = useState({
        id: "",
        customer: "",
        amount: "",
        date: "",
        status: "Pending",
    });

    // Save bills to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("bills", JSON.stringify(bills));
    }, [bills]);

    // Add new bill
    const addBill = () => {
        if (!newBill.id || !newBill.customer || !newBill.amount || !newBill.date) {
            alert("Please fill in all fields!");
            return;
        }
        setBills([...bills, newBill]);
        setNewBill({ id: "", customer: "", amount: "", date: "", status: "Pending" });
    };

    // Delete bill
    const deleteBill = (id: any) => {
        const updated = bills.filter((b: { id: any; }) => b.id !== id);
        setBills(updated);
    };

    return (
        <div className="p-2 bg-white rounded-xl shadow-lg max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Billing System</h1>

            {/* Add Bill Form */}
            <div className="mb-6 grid grid-cols-5 gap-4">
                <input
                    type="text"
                    placeholder="Invoice ID"
                    className="border p-2 rounded"
                    value={newBill.id}
                    onChange={(e) => setNewBill({ ...newBill, id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Customer Name"
                    className="border p-2 rounded"
                    value={newBill.customer}
                    onChange={(e) => setNewBill({ ...newBill, customer: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Amount ($)"
                    className="border p-2 rounded"
                    value={newBill.amount}
                    onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })}
                />
                <input
                    type="date"
                    className="border p-2 rounded"
                    value={newBill.date}
                    onChange={(e) => setNewBill({ ...newBill, date: e.target.value })}
                />
                <button
                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                    onClick={addBill}
                >
                    Add Bill
                </button>
            </div>

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
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {bills.map((bill: { id: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; customer: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; amount: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; status: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, i: Key | null | undefined) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
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
                                <td className="px-6 py-4">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => deleteBill(bill.id)}
                                    >
                                        Delete
                                    </button>
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
