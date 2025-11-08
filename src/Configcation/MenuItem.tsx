import React, { useState } from "react";
import { Link, type To } from "react-router-dom";


interface SubMenuItem {
    title: string;
    path: To;
}

interface MenuItemType {
    title: string;
    path: To;
    icon?: React.ReactNode;
    children?: SubMenuItem[];
}

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="menu-item">
            <div
                onClick={() => item.children && setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
            >
                <span className="icon">{item.icon}</span>
                <Link to={item.path}>{item.title}</Link>
                {item.children && <span>{open ? "▼" : "▶"}</span>}
            </div>

            {item.children && open && (
                <div className="submenu ml-6 flex flex-col">
                    {item.children.map((child, index) => (
                        <Link key={index} to={child.path} className="py-1 hover:text-blue-600">
                            {child.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
