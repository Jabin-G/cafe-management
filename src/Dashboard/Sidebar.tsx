import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill
} from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { RiShoppingBag4Fill, RiBarChartBoxAiFill } from "react-icons/ri";
import { IoIosPeople, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

function Sidebar() {
    const [isMenuSettingsOpen, setIsMenuSettingsOpen] = useState(false);

    const menuItems = [
        { icon: <BsGrid1X2Fill />, label: 'Dashboard', path: '/' },
        { icon: <BsFillArchiveFill />, label: 'Menu', path: '/menu' },
        { icon: <BsFillGrid3X3GapFill />, label: 'Order', path: '/order' },
        { icon: <BsPeopleFill />, label: 'Billing', path: '/billing' },
        { icon: <FaBoxes />, label: 'Inventory', path: '/inventory' },
        { icon: <BiSolidPurchaseTag />, label: 'Purchase & Vendor', path: '/purchase-vendor' },
        { icon: <GiWallet />, label: 'Expense', path: '/expense' },
        { icon: <RiShoppingBag4Fill />, label: 'Customer', path: '/customer' },
        { icon: <IoIosPeople />, label: 'Employee', path: '/employees' },
        { icon: <MdReportProblem />, label: 'Reports', path: '/reports' },
        { icon: <MdReportProblem />, label: 'leave', path: '/leaves' },
        { icon: <RiBarChartBoxAiFill />, label: 'Advanced Options', path: '/advanced-options' },
    ];

    return (
        <aside className="h-full flex flex-col justify-between text-gray-700">
            <div>
                {/* Header */}
                <div className="flex items-center justify-center h-16 border-b border-gray-200">
                    <CgAbstract className="text-2xl mr-2 text-blue-600" />
                    <span className="text-lg font-bold">Restaurant & Cafe</span>
                </div>

                {/* Main Menu */}
                <ul className="mt-4 space-y-1 board">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className="flex items-center px-5 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                            >
                                <span className="text-lg mr-3">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    {/* ---- Menu Settings with Submenu ---- */}
                    <li>
                        <button
                            onClick={() => setIsMenuSettingsOpen(!isMenuSettingsOpen)}
                            className="flex items-center justify-between w-full px-5 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                        >
                            <div className="flex items-center">
                                <BsFillArchiveFill className="text-lg mr-3" />
                                Menu Settings
                            </div>
                            {isMenuSettingsOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        </button>

                        {isMenuSettingsOpen && (
                            <ul className="ml-10 mt-1 space-y-1">
                                {[
                                    { label: "Submenu 1", path: "/menu-settings/submenu1" },
                                    { label: "Submenu 2", path: "/menu-settings/submenu2" },
                                    { label: "Table 3", path: "/menu-settings/submenu3" },
                                ].map((sub, i) => (
                                    <li key={i}>
                                        <Link
                                            to={sub.path}
                                            className="block px-3 py-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                                        >
                                            {sub.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
                <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                >
                    <BsFillGearFill className="text-lg mr-3" /> Settings
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
