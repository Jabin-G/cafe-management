import { BsFillGearFill } from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";

function Sidebar() {
    return (
        <aside className="h-full flex flex-col justify-between text-gray-700">
            <div>
                {/* <div className="flex items-center justify-center h-16 border-b border-gray-200"> */}
                <CgAbstract className="text-2xl mr-2 text-blue-600" />
                <span className="text-lg font-bold">Restaurant & Cafe</span>
                {/* </div>  */}
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