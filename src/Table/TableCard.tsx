import type { Table } from "./Types";

interface Props {
    table: Table;
    onClick: () => void;
}

const TableCard = ({ table, onClick }: Props) => {
    const colors: any = {
        available: "bg-green-100 text-green-700",
        occupied: "bg-red-100 text-red-700",
        reserved: "bg-yellow-100 text-yellow-700",
    };

    return (
        <div
            onClick={onClick}
            className={`p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition`}
        >
            <h3 className="text-xl font-semibold mb-1">{table.number}</h3>
            <p className="text-sm text-gray-600 mb-1">Seats: {table.seats}</p>

            <span className={`px-2 py-1 rounded text-sm ${colors[table.status]}`}>
                {table.status}
            </span>
        </div>
    );
};

export default TableCard;
