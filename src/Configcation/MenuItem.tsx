import React, { useState } from "react";
import { Link, type To } from "react-router-dom";

const MenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="menu-item">
            <div onClick={() => item.children && setOpen(!open)}>
                <span className="icon">{item.icon}</span>
                <Link to={item.path}>{item.title}</Link>
                {item.children && <span>{open ? "▼" : "▶"}</span>}
            </div>

            {item.children && open && (
                <div className="submenu">
                    {item.children.map((child: { path: To; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                        <Link key={index} to={child.path}>
                            {child.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItem;
