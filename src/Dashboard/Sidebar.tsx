import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { RiShoppingBag4Fill, RiBarChartBoxAiFill } from "react-icons/ri";
import { IoIosPeople, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

function Sidebar() {
    const [isMenuSettingsOpen, setIsMenuSettingsOpen] = useState(false);
    const location = useLocation();

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
        { icon: <RiBarChartBoxAiFill />, label: 'Advanced Options', path: '/advanced-options' },
    ];

    return (
        <aside className="h-screen flex flex-col justify-between bg-white border-r border-gray-200 shadow-sm transition-all duration-300">

            {/* Header */}
            <div className="flex items-center justify-center h-16 border-b border-gray-100">
                <CgAbstract className="text-2xl text-blue-600 mr-2" />
                <span className="text-lg font-semibold text-gray-800">Restaurant & Cafe</span>
            </div>

            {/* Main Menu */}
            <ul className="flex-1 mt-4 space-y-1 overflow-y-auto scroll-smooth">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`flex items-center px-5 py-2.5 rounded-md transition-all duration-300 ease-in-out
                                    ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                <span className="text-lg mr-3">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}

                {/* ---- Menu Settings with Submenu ---- */}
                <li>
                    <button
                        onClick={() => setIsMenuSettingsOpen(!isMenuSettingsOpen)}
                        className="flex items-center justify-between w-full px-5 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-300"
                    >
                        <div className="flex items-center">
                            <BsFillArchiveFill className="text-lg mr-3" />
                            Menu Settings
                        </div>
                        {isMenuSettingsOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </button>

                    <div
                        className={`ml-10 mt-1 space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${isMenuSettingsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        {[
                            { label: "Submenu 1", path: "/menu-settings/submenu1" },
                            { label: "Submenu 2", path: "/menu-settings/submenu2" },
                            { label: "Table 3", path: "/menu-settings/submenu3" },
                        ].map((sub, i) => (
                            <Link
                                key={i}
                                to={sub.path}
                                className="block px-3 py-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                            >
                                {sub.label}
                            </Link>
                        ))}
                    </div>
                </li>
            </ul>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
                <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-300"
                >
                    <BsFillGearFill className="text-lg mr-3" /> Settings
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
