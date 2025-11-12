import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate(); // React Router navigation

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (email === "jabin@example.com" && password === "password123") {
            alert("Login successful!");
            navigate("/Home"); // navigate to dashboard or Home page
        } else {
            setError("Invalid login credentials.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm transform transition-all duration-500 hover:scale-105"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Login
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

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2">Remember me</span>
                    </label>
                    <span
                        onClick={() => navigate("/forgotpassword")}
                        className="text-blue-600 text-sm hover:underline cursor-pointer"
                    >
                        Forgot Password?
                    </span>
                </div>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Login
                </button>

                <div className="mt-6 flex flex-col gap-3">
                    <button
                        type="button"
                        className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="w-5 h-5" />
                        Continue with Google
                    </button>


                    <button
                        type="button"
                        className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                    >
                        <FaFacebookF className="w-5 h-5 text-blue-600" />
                        Continue with Facebook
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
