import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // Demo login logic
        if (email === "jabin@gmail.com" && password === "12345") {

            localStorage.setItem("userEmail", email);
            localStorage.setItem("password", password);

            navigate("/dashboard");
        } else {
            setError("Invalid login credentials.");
        }
    };

    return (
        <div className="flex min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">

            {/* LEFT SIDE */}
            <div className="w-1/2 hidden lg:flex flex-col justify-center items-center text-white bg-linear-to-br from-blue-600 to-blue-500 shadow-lg rounded-r-[60px] p-10">
                <h2 className="text-4xl font-bold mb-4">New Account?</h2>
                <p className="text-sm opacity-90 mb-8">
                    Sign up and discover a whole new experience.
                </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-8 sm:p-16">

                <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 tracking-tight">
                    Welcome Back!
                </h2>

                {/* Social Buttons */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <button
                        className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all"
                        onClick={() => window.open("https://www.facebook.com/login", "_blank")}
                    >
                        <FaFacebookF className="text-blue-600" />
                    </button>

                    <button
                        className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all"
                        onClick={() => window.open("https://accounts.google.com", "_blank")}
                    >
                        <FcGoogle />
                    </button>

                    <button
                        className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all"
                        onClick={() => window.open("https://www.linkedin.com/login", "_blank")}
                    >
                        <FaLinkedinIn className="text-blue-700" />
                    </button>
                </div>

                <p className="text-gray-500 text-sm mb-4">or use your email to log in</p>

                {/* LOGIN FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 sm:p-8"
                >
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                    />

                    <label className="sr-only" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                        }}
                    />

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>

                        <span
                            onClick={() => navigate("/forgotpassword")}
                            className="text-blue-600 hover:underline cursor-pointer"
                        >
                            Forgot Password?
                        </span>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )}

                    <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-500 transition-all">
                        SIGN IN
                    </button>

                    <p className="mt-6 text-center text-sm">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            className="text-blue-600 font-semibold hover:underline cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
