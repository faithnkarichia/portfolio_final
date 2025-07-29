import React, { useState } from "react"
import profile from "../assets/profile.jpeg"
import { Menu, X } from "lucide-react";
export default function Hero(){
    const [menuOPen, setMenuOpen]=useState(false)

    return(
        <div className=" w-full h-auto md:h-[100vh] flex  flex-col items-center justify-center ">
            {/* Navbar */}
            <div className=" h-auto bg-[#504b4b11] md:h-[10vh] w-[100%] flex text-center justify-center"> 
                    
                <button  className="hidden md:block m-2 md:m-5  rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Profile </button>
                <button  className="hidden md:block m-2  md:m-5 p-2 rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Contacts </button>
                <button  className="hidden md:block m-2 md:m-5 p-2 rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Projects </button>
                <button  className="hidden md:block m-2 md:m-5 p-2 rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Tech Stack </button>
                <button  className=" hidden md:block m-2 md:m-5 p-2 rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Certificates</button>
            
               <button  className=" m-5 p-2 rounded-md text-center font-bold hover:bg-black hover:text-white px-4 py-2">Admin Signup</button>
               <button  onClick={()=>{setMenuOpen (!menuOPen)}} className="block md:hidden">
               {menuOPen?  <X/>: <Menu/>}
               </button>
                

                {menuOPen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-3">
            <li><a href="#home" className="text-gray-700 hover:bg-black hover:text-white">Profile</a></li>
            <li><a href="#about" className="text-gray-700">Contacts</a></li>
            <li><a href="#projects" className="text-gray-700">Projects</a></li>
            <li><a href="#projects" className="text-gray-700">Tech stack</a></li>
            <li><a href="#projects" className="text-gray-700">Certificates</a></li>
            
          </ul>
        </div>
                )}
                
            </div>
            {/* Hero section */}
            
            <div className=" w-full justify-center items-center md:w-[80%] h-auto md:h-[90vh] flex flex-col-reverse md:flex-row  ">

                <div className="w-[90%] md:w-[60%] flex flex-col justify-center  ">
                    <h1 className="   font-extrabold text-2xl md:text-5xl mb-6 text-gray-900">Hello my name is Faith</h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl"> a Motivated and adaptable software engineer with a solid foundation in web development, gained through hands-on training at Moringa School. Experienced in building scalable full-stack applications, leading team projects, and collaborating in agile environments.
Successfully transitioned from a Bachelor of Education Arts background, bringing with me strong communication, leadership, and critical thinking skills — qualities that now enhance my ability to solve technical problems and work effectively with teams. Passionate about continuous learning, clean code, and creating user-focused solutions.</p>
<button  className="bg-black text-white m-5 p-2 rounded-md text-center font-bold w-40 hover:bg-gray-300 hover:text-black">See More </button>
                </div>
                <div className="w-[90%] h-auto md:w-[40%] flex flex-col justify-center items-center p-10 ">
                    <img  className="rounded-md  " src={profile} />
                </div>
                
            </div>


        </div>
    )
}