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

        if (email === "jabin@example.com" && password === "password123") {
            alert("Login successful!");
            navigate("/");
        } else {
            setError("Invalid login credentials.");
        }
    };

    return (
        <div className="flex min-h-screen inset-shadow-2xs transition-all duration-500 ease-in-out bg-linear-to-br from-blue-50 via-white to-blue-100">
            {/* Left Side - Create Account Prompt */}
            <div className="w-1/2 hidden lg:flex flex-col justify-center items-center text-white bg-linear-to-br from-blue-600 to-blue-500 relative overflow-hidden shadow-lg rounded-r-[60px]">
                <div className="text-center px-12 animate-fadeIn">
                    <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">New Account?</h2>
                    <p className="mb-8 text-sm opacity-90 leading-relaxed">
                        Sign up and discover a whole new experience with us.
                    </p>
                    <button
                        onClick={() => navigate("/register")}
                        className="px-8 py-2 border border-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out shadow-md"
                    >
                        SIGN UP
                    </button>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-8 sm:p-16 transition-all duration-500">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 tracking-tight">
                    Welcome Back!
                </h2>

                {/* Social Login */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-300 ease-in-out shadow-sm"
                        onClick={() => {
                            window.location.href =
                                "https://www.facebook.com/v19.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URL&response_type=token"
                        }}
                    >
                        <FaFacebookF className="text-blue-600" />
                    </button>

                    <button
                        className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-300 ease-in-out shadow-sm"
                        onClick={() => {
                            window.location.href =
                                "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URL&response_type=token&scope=email%20profile";
                        }}
                    >
                        <FcGoogle />
                    </button>

                    <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-300 ease-in-out shadow-sm"
                        onClick={() => {
                            window.location.href =
                                "https://www.linkedin.com/login"
                        }}
                    >
                        <FaLinkedinIn className="text-blue-700" />
                    </button>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                    or use your email to log in
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 sm:p-8 transition-all duration-300"
                >
                    {/* Email */}
                    <div className="mb-4">
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Remember Me / Forgot Password */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                        <label className="flex items-center hover:text-blue-600 transition-all duration-300">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-all"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <span
                            onClick={() => navigate("/forgotpassword")}
                            className="text-blue-600 hover:underline cursor-pointer transition-all duration-300"
                        >
                            Forgot Password?
                        </span>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
                            {error}
                        </p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
                    >
                        SIGN IN
                    </button>


                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            className="text-blue-600 font-semibold hover:underline cursor-pointer transition-all duration-300"
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
