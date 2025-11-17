import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function GmailMenu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    const menuOptions = [
        { label: "Compose", action: () => alert("Compose Email") },
        { label: "Inbox", action: () => alert("Opening Inbox...") },
        { label: "Sent Mail", action: () => alert("Opening Sent Mail...") },
        { label: "Logout", action: () => alert("Logging out...") },
    ];

    return (
        <div className="relative inline-block text-left">
            {/* Gmail Icon Button */}
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-200"
            >
                <FaEnvelope size={24} />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {menuOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                option.action();
                                setOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GmailMenu;
