import React from "react";
import type { Leave } from "./Leave";

interface LeaveFormProps {
    form: Leave;
    isEditing: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function LeaveForm({ form, isEditing, onChange, onSubmit }: LeaveFormProps) {
    return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
                type="text"
                name="employeeName"
                placeholder="Employee Name"
                value={form.employeeName}
                onChange={onChange}
                className="border p-2 rounded"
                required
            />

            <select
                name="type"
                value={form.type}
                onChange={onChange}
                className="border p-2 rounded"
                required
            >
                <option value="">Select Leave Type</option>
                <option value="Sick">Sick Leave</option>
                <option value="Casual">Casual Leave</option>
                <option value="Annual">Annual Leave</option>
            </select>

            <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={onChange}
                className="border p-2 rounded"
                required
            />

            <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={onChange}
                className="border p-2 rounded"
                required
            />

            <textarea
                name="reason"
                placeholder="Reason"
                value={form.reason}
                onChange={onChange}
                className="border p-2 rounded md:col-span-2"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                {isEditing ? "Update Leave" : "Add Leave"}
            </button>
        </form>
    );
}
