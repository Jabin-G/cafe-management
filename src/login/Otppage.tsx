import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage: React.FC = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (otp.length !== 6) {
            setError("Please enter a 6-digit OTP.");
            return;
        }

        // Demo: Assume OTP is always correct
        alert("OTP Verified! You can now reset your password.");
        navigate("/reset-password"); // Navigate to reset password page
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Enter OTP
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="otp"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        OTP
                    </label>
                    <input
                        id="otp"
                        type="text"
                        maxLength={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default OtpPage;
