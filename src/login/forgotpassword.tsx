import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // ✅ fixed here

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        // Demo: Show success message and navigate to OTP page
        setMessage(`A password reset link has been sent to ${email}`);
        setEmail("");

        // Navigate to OTP page after 1 second (for demo)
        setTimeout(() => {
            navigate("/otp"); // OTP page route
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Forgot Password
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Send Reset Link
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Remember your password?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;
