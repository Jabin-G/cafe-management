import type { Vendor } from "./types";

interface Props {
    vendors: Vendor[];
}

const VendorTable = ({ vendors }: Props) => {
    return (
        <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-3">Vendors</h2>

            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Phone</th>
                        <th className="p-2 text-left">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {vendors.map((v) => (
                        <tr key={v.id} className="border-b">
                            <td className="p-2">{v.name}</td>
                            <td className="p-2">{v.phone}</td>
                            <td className="p-2">
                                <span
                                    className={`px-2 py-1 rounded text-sm ${v.status === "active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {v.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorTable;
