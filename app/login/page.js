"use client";
import Link from "@node_modules/next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="flex  justify-center min-h-screen px-2 md:p-6">
      {/* Card Container */}
      <div className="my-12 p-8 rounded-lg bg-white shadow-md border border-gray-200 hover:border-accent hover:scale-105 transition-all duration-300">
        <form onSubmit={handleSubmit} className="w-full p-2 max-w-sm">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Login
          </h2>

          {/* Username Field */}
          <div className="mb-6">
            <label className="block text-xl  text-primary mb-2">Email</label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="user@example.com"
                className="w-full p-2 md:text-xl outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="block text-xl  text-primary mb-2">Password</label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-secondaryText mr-2" />
              <input
                bg-white
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type your password"
                className="w-full p-2 md:text-xl outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 ml-2"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 flex justify-center items-center">
            <p className=" text-sm text-accent cursor-pointer hover:text-primary">
              Forgot password?
            </p>
          </div>

          {/* Submit Button with Gradient */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white rounded-lg mt-6 bg-accent hover:opacity-90 transition duration-300"
          >
            Login
          </button>

          {/* OR Section */}
          <div className="my-6 text-center text-gray-500">Or Sign Up Using</div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-blue-400 text-white hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-red-600 text-white hover:scale-110 transition"
            >
              <FaGoogle />
            </a>
          </div>

          {/* Sign Up Link */}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-center text-sm text-gray-600">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
            <Link href="/register" className="text-primary hover:underline">
              Sign Up
            </Link>
            {/* <a href="/register" className="text-primary hover:underline">
              Register
            </a> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
