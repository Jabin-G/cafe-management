import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Employee } from "./Employee";

export default function EmployeeTable() {
    const navigate = useNavigate();

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
    const [showForm, setShowForm] = useState(false);

    // Handle input fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "number"
                        ? Number(value)
                        : value,
        });
    };

    // Add or update employee
    const handleAddOrUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditing) {
            // Update
            setEmployees(employees.map((emp) => (emp.id === form.id ? { ...form } : emp)));
            setIsEditing(false);
        } else {
            // Add new
            const newEmployee = { ...form, id: employees.length + 1 };
            setEmployees([...employees, newEmployee]);
        }

        // Reset form
        setForm({
            id: 0,
            name: "",
            age: 0,
            joinDate: "",
            department: "",
            fullTime: false,
        });

        setShowForm(false);
    };

    // Edit an employee
    const handleEdit = (emp: Employee) => {
        setForm(emp);
        setIsEditing(true);
        setShowForm(true);
    };

    // Delete employee
    const handleDelete = (id: number) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    return (
        <div className="p-6">

            {/* Top Buttons */}
            <div className="flex justify-end gap-3 mt-6">
                <button
                    type="button"
                    onClick={() => {
                        setShowForm(!showForm);
                        setIsEditing(false);
                        setForm({
                            id: 0,
                            name: "",
                            age: 0,
                            joinDate: "",
                            department: "",
                            fullTime: false,
                        });
                    }}
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
                >
                    Add Employee
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/leavepage")}
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all"
                >
                    Leave
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <form
                    onSubmit={handleAddOrUpdate}
                    className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-6 gap-4 mt-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-300"
                        required
                    />

                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={form.age || ""}
                        onChange={handleInputChange}
                        className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-300"
                        required
                    />

                    <input
                        type="date"
                        name="joinDate"
                        value={form.joinDate}
                        onChange={handleInputChange}
                        className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-300"
                        required
                    />

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={form.department}
                        onChange={handleInputChange}
                        className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-300"
                        required
                    />

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="fullTime"
                            checked={form.fullTime}
                            onChange={handleInputChange}
                            className="accent-blue-500 w-5 h-5"
                        />
                        <span className="text-gray-700 font-medium">Full Time</span>
                    </label>

                    <button
                        type="submit"
                        className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all md:col-span-1"
                    >
                        {isEditing ? "Update" : "Add Employee"}
                    </button>
                </form>
            )}

            {/* Employee Table */}
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full text-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Age</th>
                            <th className="px-6 py-4">Join Date</th>
                            <th className="px-6 py-4">Department</th>
                            <th className="px-6 py-4">Full Time</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-blue-50 transition">
                                <td className="px-6 py-4">{emp.id}</td>
                                <td className="px-6 py-4">{emp.name}</td>
                                <td className="px-6 py-4">{emp.age}</td>
                                <td className="px-6 py-4">{emp.joinDate}</td>
                                <td className="px-6 py-4">{emp.department}</td>
                                <td className="px-6 py-4 text-center">
                                    {emp.fullTime ? "✅" : "❌"}
                                </td>

                                <td className="px-6 py-4 text-center space-x-3">
                                    <button
                                        onClick={() => handleEdit(emp)}
                                        className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(emp.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
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
