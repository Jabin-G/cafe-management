import React, { useState, useEffect } from "react";

export default function App() {
    // Load initial products from localStorage
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });

    const [formData, setFormData] = useState({ name: "", category: "", price: "" });
    const [editingIndex, setEditingIndex] = useState(null);

    // Save products to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add or update product
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, category, price } = formData;
        if (!name || !category || !price) return;

        if (editingIndex !== null) {
            const updated = [...products];
            updated[editingIndex] = formData;
            setProducts(updated);
            setEditingIndex(null);
        } else {
            setProducts([...products, formData]);
        }

        setFormData({ name: "", category: "", price: "" });
    };

    // Edit product
    const handleEdit = (index) => {
        setFormData(products[index]);
        setEditingIndex(index);
    };

    // Delete product
    const handleDelete = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                    🛍️ Retail Product List
                </h1>

                {/* Product Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 flex-1 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 flex-1 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price ($)"
                        value={formData.price}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-32 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
                    >
                        {editingIndex !== null ? "Update" : "Add"}
                    </button>
                </form>

                {/* Product List */}
                {products.length > 0 ? (
                    <table className="w-full border border-gray-200">
                        <thead className="bg-indigo-50">
                            <tr>
                                <th className="p-3 border-b">#</th>
                                <th className="p-3 border-b">Name</th>
                                <th className="p-3 border-b">Category</th>
                                <th className="p-3 border-b">Price ($)</th>
                                <th className="p-3 border-b text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-3 border-b text-gray-600">{index + 1}</td>
                                    <td className="p-3 border-b font-medium">{p.name}</td>
                                    <td className="p-3 border-b">{p.category}</td>
                                    <td className="p-3 border-b">${p.price}</td>
                                    <td className="p-3 border-b text-center">
                                        <button
                                            onClick={() => handleEdit(index)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">No products added yet.</p>
                )}
            </div>
        </div>
    );
}
