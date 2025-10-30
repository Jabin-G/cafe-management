import { BsFillBellFill, BsPersonCircle, BsSearch, BsCalendarEventFill } from 'react-icons/bs';

function Header() {
    return (
        <header className="sticky top-0 z-15 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashbroad</h1>
                <h5 className="text-sm text-gray-500"> Hello, wellcome Back!</h5>
            </div>

            <div className="flex-1 mx-6">
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-300 rounded-full py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <BsFillBellFill className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer" />
                <BsCalendarEventFill className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer" />
                <div>
                    <p className="text-1xl font-bold text-gray-800 mb-2 sticky">Jabin</p>
                    <p className="text-sm text-gray-500">Admin!</p>
                </div>
                <BsPersonCircle className="text-2xl text-gray-500 hover:text-blue-600 cursor-pointer" />
            </div>
        </header>
    );
}

export default Header;
