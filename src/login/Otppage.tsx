import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const navigate = useNavigate();

    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return; // allow only numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input when a digit is entered
        if (value && index < 3) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const finalOtp = otp.join("");

        if (finalOtp.length !== 4) {
            setError("Please enter a 4-digit OTP.");
            return;
        }

        // Demo success
        alert("OTP Verified! You can now reset your password.");
        navigate("/reset-password");
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

                {/* OTP Boxes */}
                <div className="flex justify-between mb-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            ref={(el) => (inputsRef.current[index] = el)}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-14 h-14 text-center text-xl border border-gray-300 rounded-md 
                                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    ))}
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
