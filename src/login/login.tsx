import React, { useState } from "react";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (email === "user@example.com" && password === "password123") {
            alert("Login successful!");

        } else {
            setError("Invalid login credentials.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Login
                </h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;