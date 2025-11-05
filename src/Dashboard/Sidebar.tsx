import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { RiBarChartBoxAiFill } from "react-icons/ri";


function Sidebar() {
    return (
        <aside className="h-full flex flex-col justify-between text-gray-700">
            <div>
                <div className="flex items-center justify-center h-16 border-b border-gray-200">
                    <CgAbstract className="text-2xl mr-2 text-blue-600" />
                    <span className="text-lg font-bold">Restaurant & Cafe</span>
                </div>

                <ul className="mt-4 space-y-1 board">
                    {[
                        { icon: <BsGrid1X2Fill />, label: 'Dashboard' },
                        { icon: <BsFillArchiveFill />, label: 'Menu' },
                        { icon: <BsFillGrid3X3GapFill />, label: 'Order' },
                        { icon: <BsPeopleFill />, label: ' Billing' },
                        { icon: <FaBoxes />, label: 'Inventory' },
                        { icon: <BiSolidPurchaseTag />, label: 'Purchase & Vendor' },
                        { icon: <GiWallet />, label: 'Expense' },
                        { icon: <RiShoppingBag4Fill />, label: 'Customer' },
                        { icon: <IoIosPeople />, label: 'Employee' },
                        { icon: <MdReportProblem />, label: 'Reports' },
                        { icon: <RiBarChartBoxAiFill />, label: 'Advanced Options' },
                    ].map((item, index) => (
                        <li key={index}>
                            <a href="#" className="flex items-center px-5 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition">
                                <span className="text-lg mr-3">{item.icon}</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-4 border-t border-gray-200">
                <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition">
                    <BsFillGearFill className="text-lg mr-3" /> Settings
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
