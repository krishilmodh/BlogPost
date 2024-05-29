import React, { useState } from "react";
import axios from "../axios";
import { useProvider } from "../Provider";
import { useNavigate } from "react-router-dom"; 

// Login component
const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const { setIsLogin } = useProvider(); // Context hook for login status
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Send login request
      const response = await axios.post("/api/v1/auth/login", { email, password });
      if (response.status === 200) {
        setIsLogin(true); // Set login status to true
        navigate("/blogs"); // Navigate to blogs
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Render login form
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
        <div className="bg-gray-800 text-white p-8 rounded-md shadow-md w-96 h-96 justify-evenly flex flex-col" >
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 focus:outline-none" 
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2" htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 focus:outline-none" 
                />
            </div>
            <button 
                onClick={handleSubmit} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mr-2 focus:outline-none"
            >
                Submit
            </button>
        </div>
    </div>
  );
};

export default Login; // Exporting Login component