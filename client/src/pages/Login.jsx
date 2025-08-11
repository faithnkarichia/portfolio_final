import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Home} from "lucide-react"
export default function Login() {
  const navigate = useNavigate();
  const[loginData,setLoginData]=useState({
    email:"",
    password:""
  })

  const handleGoHome = () => {
    navigate("/");
  };
// get the data from the form then validate it and then redirect the user
const handlechange=(e)=>{
const{name,value}=e.target
setLoginData((prevData)=>({
    ...prevData,
    [name]:value
}))


}


const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch('http://127.0.0.1:5000/login',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "email":loginData.email,
        "password": loginData.password
      })

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"logged in successifully")
      navigate("/adminDashboard")
      // localStorage.setItem("token":)
    })
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-sm">
        <button
          onClick={handleGoHome}
          className="mb-4  text-black py-1 px-4 rounded hover:bg-black hover:text-white transition"
        >
          <Home/>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm mb-1" >Email</label>
            <input
            name="email"
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-black rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              value={loginData.email} onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
            name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-black rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              value={loginData.password} onChange={handlechange}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="underline text-black hover:text-gray-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
