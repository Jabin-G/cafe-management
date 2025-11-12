import { BsFillBellFill, BsPersonCircle, BsSearch, BsCalendarEventFill } from 'react-icons/bs';
import { FaCartPlus } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm">

            <div className="flex flex-col leading-tight">
                <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-xs text-gray-500">Welcome back!</p>
            </div>

            <div className="flex-1 mx-4">
                <div className="relative max-w-xs">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-300 rounded-full py-1.5 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>
            </div>

            <div className="flex items-center justify-between space-x-3">
                <BsFillBellFill className="text-lg text-gray-500 hover:text-blue-600 cursor-pointer" />
                <BsCalendarEventFill className="text-lg text-gray-500 hover:text-blue-600 cursor-pointer" />
                <FaCartPlus className="text-lg text-gray-500 hover:text-blue-600 cursor-pointer" />

                <div className="text-right leading-tight">
                    <p className="text-sm font-semibold text-gray-800">Jabin</p>
                    <p className="text-xs text-gray-500">Admin</p>
                </div>

                <BsPersonCircle className="text-2xl text-gray-500 hover:text-blue-600 cursor-pointer" />
            </div>
        </header>
    );
}

export default Header;
