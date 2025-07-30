import React from "react"
import website from "../assets/website.jpg"
export default function Projects(){
    return(
        <div className="flex flex-col  mb-30">
            <h1 className="font-bold text-3xl text-center mb-10 mt-10">Projects</h1>
            <p className="text-gray-500 mb-15 text-center">Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.</p>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4  w-[80%] gap-5">
                <div className="">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4  md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>

                <div className="rounded-md">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4 md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>
                <div className="">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4 md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>
                <div className="">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4 md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>
                <div className="">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4 md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>
                <div className="">
                    <img className="rounded-md" src={website}/>
                    <h1 className="font-bold text-center my-4 md:text-left text-xl">recipes app</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                    <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                </div>
            </div>
            </div>
        </div>
    )
}