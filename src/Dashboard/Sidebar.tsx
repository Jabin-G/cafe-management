import { useState, type SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGrid1X2Fill, BsFillArchiveFill } from 'react-icons/bs';
import { BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { RiShoppingBag4Fill, RiBarChartBoxAiFill } from "react-icons/ri";
import { IoIosPeople, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";

function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const location = useLocation();

    const toggleMenu = (label: string | SetStateAction<null>) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    const menuItems = [
        { icon: <BsGrid1X2Fill />, label: 'Dashboard', path: '/dashboard' },
        { icon: <BsFillArchiveFill />, label: 'Menu', path: '/menu' },
        { icon: <BsPeopleFill />, label: 'Billing', path: '/billing' },

        // FIXED: Unique table paths
        {
            icon: <MdOutlineTableRestaurant />,
            label: 'Table',
            path: '/table',
            children: [
                { label: 'Table 1', path: '/table/1' },
                { label: 'Table 2', path: '/table/2' },
                { label: 'Table 3', path: '/table/3' },
            ]
        },

        { icon: <FaBoxes />, label: 'Inventory', path: '/inventory' },
        { icon: <BiSolidPurchaseTag />, label: 'Purchase & Vendor', path: '/purchase-vendor' },
        { icon: <GiWallet />, label: 'Expense', path: '/expense' },
        { icon: <RiShoppingBag4Fill />, label: 'Customer', path: '/customer' },
        { icon: <IoIosPeople />, label: 'Employee', path: '/employees' },
        { icon: <MdReportProblem />, label: 'Reports', path: '/reports' },
        { icon: <RiBarChartBoxAiFill />, label: 'Advanced Options', path: '/advanced-options' },
    ];

    return (
        <aside className="h-screen flex flex-col justify-between bg-white border-r border-gray-200 shadow-sm">

            {/* Logo */}
            <div className="flex items-center justify-center h-16 border-b border-gray-100">
                <CgAbstract className="text-2xl text-blue-600 mr-2" />
                <span className="text-lg font-semibold text-gray-800">Restaurant & Cafe</span>
            </div>

            {/* Menu */}
            <ul className="flex-1 mt-4 space-y-1 overflow-y-auto">

                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    const isChildActive = item.children?.some(child =>
                        location.pathname.startsWith(child.path)
                    );

                    return (
                        <li key={index}>
                            {item.children ? (
                                <>
                                    {/* Parent item */}
                                    <button
                                        onClick={() => toggleMenu(item.label)}
                                        className={`w-full flex items-center justify-between px-5 py-2.5 rounded-md
                                            ${(isActive || isChildActive)
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-lg mr-3">{item.icon}</span>
                                            {item.label}
                                        </div>

                                        {openMenu === item.label ? (
                                            <IoIosArrowDown className="text-lg" />
                                        ) : (
                                            <IoIosArrowForward className="text-lg" />
                                        )}
                                    </button>

                                    {/* Child menu */}
                                    {openMenu === item.label && (
                                        <ul className="ml-10 mt-1 space-y-1">
                                            {item.children.map((child, i) => {
                                                const isChild = location.pathname === child.path;
                                                return (
                                                    <li key={i}>
                                                        <Link
                                                            to={child.path}
                                                            className={`block px-3 py-2 rounded-md text-sm
                                                                ${isChild
                                                                    ? 'text-blue-600 bg-blue-50 font-medium'
                                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                // Normal single item
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-5 py-2.5 rounded-md
                                        ${isActive
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                >
                                    <span className="text-lg mr-3">{item.icon}</span>
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}

            </ul>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
                <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                >
                    <BsFillGearFill className="text-lg mr-3" /> Settings
                </Link>
            </div>

        </aside>
    );
}

export default Sidebar;
