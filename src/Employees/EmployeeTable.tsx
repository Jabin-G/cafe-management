import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [showForm, setShowForm] = useState(false); // ✅ Add this

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
        setShowForm(false); // hide form after submission
    };

    const handleEdit = (emp: Employee) => {
        setForm(emp);
        setIsEditing(true);
        setShowForm(true); // show form when editing
    };

    const handleDelete = (id: number) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <div>
            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 md:col-span-1"
                >
                    {isEditing ? "Update Employee" : "Add Employee"}
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/leavepage")}
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-200 md:col-span-1"
                >
                    Leave Tracker
                </button>


            </div>

            {showForm && (
                <form
                    onSubmit={handleAddOrUpdate}
                    className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-6 gap-4 transition-all duration-300 mt-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={form.age || ""}
                        onChange={handleInputChange}
                        className="border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        required
                    />
                    <input
                        type="date"
                        name="joinDate"
                        value={form.joinDate}
                        onChange={handleInputChange}
                        className="border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={form.department}
                        onChange={handleInputChange}
                        className="border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        required
                    />
                    <label className="flex items-center space-x-2 md:col-span-1">
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
                        className="bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-200 md:col-span-1"
                    >
                        {isEditing ? "Update" : "Add Employee"}
                    </button>

                </form>
            )}

            {/* Table Section */}
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full text-gray-700 rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-blue-600 text-white text-left">
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
                        {employees.map(emp => (
                            <tr key={emp.id} className="hover:bg-blue-50 transition-all duration-200">
                                <td className="px-6 py-4 font-medium">{emp.id}</td>
                                <td className="px-6 py-4">{emp.name}</td>
                                <td className="px-6 py-4">{emp.age}</td>
                                <td className="px-6 py-4">{emp.joinDate}</td>
                                <td className="px-6 py-4">{emp.department}</td>
                                <td className="px-6 py-4 text-center">{emp.fullTime ? "✅" : "❌"}</td>
                                <td className="px-6 py-4 text-center space-x-2">
                                    <button
                                        onClick={() => handleEdit(emp)}
                                        className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-500 transition"
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
