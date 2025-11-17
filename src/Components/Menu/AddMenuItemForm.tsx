import { useState } from "react";
import type { MenuItem } from "../Types/Meun";

interface Props {
    onAdd: (item: MenuItem) => void;
}

const AddMenuItemForm = ({ onAdd }: Props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onAdd({
            id: Date.now().toString(),
            name,
            basePrice: price,   // must match your MenuItem type
            category: "General",
            available: true
        });

        setName("");
        setPrice(0);
    };

    return (
        <form className="p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-3">Add New Menu Item</h2>

            <input
                type="text"
                placeholder="Item name"
                className="w-full border p-2 rounded mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded mb-2"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Item
            </button>
        </form>
    );
};

export default AddMenuItemForm;
