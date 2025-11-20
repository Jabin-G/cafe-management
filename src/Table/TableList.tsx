import { useState } from "react";;
import TableCard from "./TableCard";
import type { Table } from "./Types";

const TableList = () => {
    const [tables] = useState<Table[]>([
        { id: 1, number: "Table 1", seats: 4, status: "available" },
        { id: 2, number: "Table 2", seats: 2, status: "occupied" },
        { id: 3, number: "Table 3", seats: 6, status: "reserved" },
    ]);

    const handleClick = (table: Table) => {
        alert(`Clicked: ${table.number}`);
    };

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tables.map((table) => (
                <TableCard
                    key={table.id}
                    table={table}
                    onClick={() => handleClick(table)}
                />
            ))}
        </div>
    );
};

export default TableList;
