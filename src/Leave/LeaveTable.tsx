import { useState } from "react";
import { type Leave } from "./Leave";
import LeaveForm from "./LeaveForm";
import LeaveRow from "./LeaveRow";

export default function LeaveTable() {
    const [leaves, setLeaves] = useState<Leave[]>([
        {
            id: 1,
            employeeName: "Alice",
            type: "Sick",
            startDate: "2025-11-05",
            endDate: "2025-11-07",
            reason: "Fever and rest",
            status: "Approved",
        },
    ]);

    const [form, setForm] = useState<Leave>({
        id: 0,
        employeeName: "",
        type: "",
        startDate: "",
        endDate: "",
        reason: "",
        status: "Pending",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditing) {
            setLeaves(leaves.map(l => (l.id === form.id ? form : l)));
            setIsEditing(false);
        } else {
            const newLeave = { ...form, id: leaves.length + 1 };
            setLeaves([...leaves, newLeave]);
        }

        setForm({
            id: 0,
            employeeName: "",
            type: "",
            startDate: "",
            endDate: "",
            reason: "",
            status: "Pending",
        });
    };

    const handleEdit = (leave: Leave) => {
        setForm(leave);
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        setLeaves(leaves.filter(l => l.id !== id));
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Leave Management</h2>

            <LeaveForm
                form={form}
                isEditing={isEditing}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Employee</th>
                        <th className="border px-4 py-2">Type</th>
                        <th className="border px-4 py-2">Start</th>
                        <th className="border px-4 py-2">End</th>
                        <th className="border px-4 py-2">Reason</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map(leave => (
                        <LeaveRow key={leave.id} leave={leave} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
