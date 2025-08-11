import React, { useEffect, useState } from "react"
import website from "../assets/website.jpg"
export default function Projects(){
    const[projects,setProjects]=useState([])
    const[selectedProject, setSelectedProject]=useState(null)
    const[showModal,setShowModal]=useState(false)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER_URL}/projects`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data,"my client projects")
            setProjects(data)
        })
    },[])

    // on click of the button to show a small modal asking if the user wants to view the live app or view on github
    const handleSeeDetails=(project)=>{
        setSelectedProject(project)
        setShowModal(true)
    }
    const handleCloseModal=()=>{
        setSelectedProject(null)
        setShowModal(false)

    }
    return(
        <div id="projects" className="flex flex-col  mb-30">
            <h1 className="font-bold text-3xl text-center mb-10 mt-10">Projects</h1>
            <p className="text-gray-500 mb-15 text-center">Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.</p>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3  w-[80%] gap-5">
                
                    {projects.length>0 && projects.map((project,index)=>(
                        <div key={index} className="md:mb-15">
                        <img className="rounded-md" src={project.link}/>
                    <h1 className="font-bold text-center my-4  md:text-left text-xl">{project.name}</h1>
                    <p className="text-gray-500 text-center mb-6 md:text-left">{project.description}</p>
                    <button onClick={()=>handleSeeDetails(project)} className="bg-black text-white  p-2 rounded-md text-center font-bold w-30 hover:bg-gray-300 hover:text-black items-center">SEE DETAILS </button>
                     </div>
                    ))}
                    
            </div>
            </div>
{showModal && selectedProject && (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-[90%] md:w-[400px] relative">
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
      >
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">{selectedProject.name}</h2>
      <p className="mb-4">Choose where you'd like to go:</p>

      <div className="flex justify-between gap-4">
        <a
          href={selectedProject.live_link || "#"}
          target="_blank"
          rel="noreferrer"
          className={`px-4 py-2 rounded text-center flex-1 ${
            selectedProject.live_link
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
          }`}
        >
          Live App
        </a>
        <a
          href={selectedProject.github_link || "#"}
          target="_blank"
          rel="noreferrer"
          className={`px-4 py-2 rounded text-center flex-1 ${
            selectedProject.github_link
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
          }`}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
)}



        </div>
    )
}