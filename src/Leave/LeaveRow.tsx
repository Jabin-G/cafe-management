import { type Leave } from "./Leave";

interface LeaveRowProps {
    leave: Leave;
    onEdit: (leave: Leave) => void;
    onDelete: (id: number) => void;
}

export default function LeaveRow({ leave, onEdit, onDelete }: LeaveRowProps) {
    return (
        <tr className="text-center">
            <td className="border px-4 py-2">{leave.id}</td>
            <td className="border px-4 py-2">{leave.employeeName}</td>
            <td className="border px-4 py-2">{leave.type}</td>
            <td className="border px-4 py-2">{leave.startDate}</td>
            <td className="border px-4 py-2">{leave.endDate}</td>
            <td className="border px-4 py-2">{leave.reason}</td>
            <td className="border px-4 py-2 font-semibold">{leave.status}</td>
            <td className="border px-4 py-2 space-x-2">
                <button
                    onClick={() => onEdit(leave)}
                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(leave.id)}
                    className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
