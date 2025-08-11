import React, { useState } from "react";

export default function Contact() {

  // get data from the form
  const [contactInfo, setContactInfo]=useState({
    firstname:"",
    lastname:"",
    email:"",
    message:""
  })

  const handlechange=(e)=>{
const{name, value}=e.target
setContactInfo((prev)=>({...prev,[name]:value}))
  }
  // send that data to the backend
  const handleSubmit=(e)=>{
e.preventDefault()

fetch("http://127.0.0.1:5000/contacts",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    "firstname":contactInfo.firstname,
    "lastname":contactInfo.lastname,
    "email":contactInfo.email,
    "message":contactInfo.message
  })
 

})
 .then(res=>res.json())
  .then((data)=>{
    console.log(data,"posted successfully")
    
   setContactInfo({
     firstname:"",
    lastname:"",
    email:"",
    message:""
   })
   window.alert("Your message has been recieved we i will get back to you ASAP!")
  
  })
  }
  return (
    <div id="contacts" className="flex justify-center">
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
            <h3>📧 faynkarichia@gmail.com</h3>
          </div>
          <div>
            <h3>📧 kashfaith77@gmail.com</h3>
          </div>
        </div>

        <div className=" p-6 md:p-20">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="w-full  mb-2">First name</label>
            <input type="text" id="firstName" name="firstname" placeholder="John " onChange={handlechange} value={contactInfo.firstname} required className="w-full  border-b-2 border-gray-300 mb-2 p-1  outline-none"/>

            <label htmlFor="lastName" className="w-full">Last name</label>
            <input type="text" id="lastName" name="lastname" placeholder="Doe" onChange={handlechange} value={contactInfo.lastname} required className="w-full border-b-2 border-gray-300 mb-2 p-1 outline-none"/>

            <label htmlFor="email" className="w-full">Email</label>
            <input type="email" id="email" name="email" placeholder="john@gmail.com" onChange={handlechange} required value={contactInfo.email} className="w-full border-b-2 border-gray-300 mb-2 p-1 outline-none"/>

            
            <br  className="mb-2"/>

            <label className="w-full " htmlFor="message">Your message</label>
            <textarea onChange={handlechange} value={contactInfo.message} required className="w-full border-2 h-50 border-gray-300 mb-2 p-2 outline-none" id="message" name="message" />

            <br />
            <button  className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEND </button>
          </form>
        </div>
      </div>
    </div>
    </div>

   
  );
}
