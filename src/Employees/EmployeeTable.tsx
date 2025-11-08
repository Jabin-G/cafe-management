import { useState } from "react";
import type { Employee } from "./Employee";

export default function EmployeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([
        { id: 1, name: "Alice", age: 25, joinDate: "2023-01-15", department: "HR", fullTime: true },
        { id: 2, name: "Bob", age: 30, joinDate: "2022-05-10", department: "Engineering", fullTime: false },
    ]);

    const [form, setForm] = useState<Employee>({
        id: 0,
        name: "",
        age: 0,
        joinDate: "",
        department: "",
        fullTime: false,
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
        });
    };

    const handleAddOrUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setEmployees(employees.map(emp => (emp.id === form.id ? { ...form } : emp)));
            setIsEditing(false);
        } else {
            const newEmployee = { ...form, id: employees.length + 1 };
            setEmployees([...employees, newEmployee]);
        }
        setForm({ id: 0, name: "", age: 0, joinDate: "", department: "", fullTime: false });
    };

    const handleEdit = (emp: Employee) => {
        setForm(emp);
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Employee Table</h2>

            {/* Form */}
            <form onSubmit={handleAddOrUpdate} className="mb-6 grid grid-cols-1 md:grid-cols-6 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={form.age || ""}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="date"
                    name="joinDate"
                    value={form.joinDate}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={form.department}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    required
                />
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="fullTime"
                        checked={form.fullTime}
                        onChange={handleInputChange}
                        className="border"
                    />
                    <span>Full Time</span>
                </label>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    {isEditing ? "Update" : "Add"}
                </button>
            </form>

            {/* Table */}
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Join Date</th>
                        <th className="border px-4 py-2">Department</th>
                        <th className="border px-4 py-2">Full Time</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id} className="text-center">
                            <td className="border px-4 py-2">{emp.id}</td>
                            <td className="border px-4 py-2">{emp.name}</td>
                            <td className="border px-4 py-2">{emp.age}</td>
                            <td className="border px-4 py-2">{emp.joinDate}</td>
                            <td className="border px-4 py-2">{emp.department}</td>
                            <td className="border px-4 py-2">{emp.fullTime ? "Yes" : "No"}</td>
                            <td className="border px-4 py-2 space-x-2">
                                <button
                                    onClick={() => handleEdit(emp)}
                                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(emp.id)}
                                    className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
