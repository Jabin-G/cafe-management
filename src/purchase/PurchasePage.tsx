import PurchaseTable from "./PurchaseTable";
import type { PurchaseOrder } from "./types";

const PurchasePage = () => {
    const dummyPurchases: PurchaseOrder[] = [
        { id: "PO1001", vendor: "ABC Traders", amount: 1200, status: "approved" },
        { id: "PO1002", vendor: "XYZ Suppliers", amount: 850, status: "pending" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Purchase Management</h1>
            <PurchaseTable purchases={dummyPurchases} />
        </div>
    );
};

export default PurchasePage;
