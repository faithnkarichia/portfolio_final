import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center">
         <div className="w-[90%] md:w-[80%] ">
        <div className="">
            <h1 className="text-center my-10 font-bold text-3xl">CONTACT ME</h1>
      <p className="text-center text-gray-500 md:text-xl md:mb-10">
        Feel free to reach out through the contact form, and let's embark on a
        journey of innovation and success.
      </p>
        </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-black text-white p-6 rounded-md my-5 md:text-xl md:p-10  ">
          <h1 className="font-semibold text-2xl mb-3">Contact Info</h1>
          <p>I'm available on the following channels:</p>
          <div className="my-3"> 
            <h3>📞 0768692489</h3>
          </div>
          <div className="mb-3">
            <h3>📧 hello@gmail.com</h3>
          </div>
          <div>
            <h3>🎫 Open Support Ticket</h3>
          </div>
        </div>

        <div className=" p-6 md:p-20">
          <form>
            <label htmlFor="firstName" className="w-full  mb-2">First name</label>
            <input type="text" id="firstName" name="firstName" placeholder="John " className="w-full  border-b-2 border-gray-300 mb-2 p-1  outline-none"/>

            <label htmlFor="lastName" className="w-full">Last name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Doe" className="w-full border-b-2 border-gray-300 mb-2 p-1 outline-none"/>

            <label htmlFor="email" className="w-full">Email</label>
            <input type="email" id="email" name="email" placeholder="john@gmail.com" className="w-full border-b-2 border-gray-300 mb-2 p-1 outline-none"/>

            <p className="w-full">What is your favorite fruit?</p>

            <label htmlFor="apple" className="" >
              <input  type="radio" id="apple" name="fruit" value="apple" className="mr-2" />
              Apple
            </label>
            <br />

            <label htmlFor="banana">
              <input type="radio" id="banana" name="fruit" value="banana " className="mr-2"/>
              Banana
            </label>
            <br />

            <label htmlFor="orange">
              <input type="radio" id="orange" name="fruit" value="orange" className="mr-2"/>
              Orange
            </label>
            <br />

            <label htmlFor="grapes" >
              <input type="radio" id="grapes" name="fruit" value="grapes" className="mr-2"/>
              Grapes
            </label>
            <br  className="mb-2"/>

            <label className="w-full " htmlFor="message">Your message</label>
            <textarea className="w-full border-2 h-50 border-gray-300 mb-2 p-2 outline-none" id="message" name="message" />

            <br />
            <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEND </button>
          </form>
        </div>
      </div>
    </div>
    </div>

   
  );
}
