import VendorTable from "./VendorTable";
import type { Vendor } from "./types";

const VendorPage = () => {
    const dummyVendors: Vendor[] = [
        { id: "1", name: "ABC Traders", phone: "9876543210", status: "active" },
        { id: "2", name: "XYZ Suppliers", phone: "9988776655", status: "inactive" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Vendor Management</h1>
            <VendorTable vendors={dummyVendors} />
        </div>
    );
};

export default VendorPage;
