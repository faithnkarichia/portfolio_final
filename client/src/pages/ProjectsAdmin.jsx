import React, { useEffect, useState,useRef } from "react";
import Navbar from "../components/Navbar";


export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const formRef = useRef(null);
  

  const [form, setForm] = useState({ name: "", description: "", link: "" ,
  live_link: "",
  github_link: ""});
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
// add project
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId){
 fetch(`${import.meta.env.VITE_SERVER_URL}/projects/${editingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((updatedProject) => {
      console.log("Updated:", updatedProject);
      // Replace only the updated project in the state
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === updatedProject.id ? updatedProject : proj
        )
      );
      setForm({ name: "", description: "", link: "" ,live_link:"",github_link:""});
      setEditingId(null);
    });
    }
    else{
    if (!form.name || !form.description || !form.link) return;
    fetch(`${import.meta.env.VITE_SERVER_URL}/add_project`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({"name":form.name, "link":form.link, "description":form.description,live_link: form.live_link,
  github_link: form.github_link})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"project submitted")
      setProjects(prev=>[...prev,data])
    })

   

    setForm({ name: "", description: "", link: "" ,live_link:"",github_link:""});
  }
  };

  // get the projects from the backend


  useEffect(()=>{
  fetch(`${import.meta.env.VITE_SERVER_URL}/projects`)
  .then((res)=>res.json())
  .then((data)=>{
    // update the form data
    console.log(data,"these are my projects")
    setProjects(data)
  })
  },[])

  // const handleDelete = (id) => {
  //   setProjects(projects.filter((proj) => proj.id !== id));
  //   if (editingId === id) {
  //     setForm({ name: "", description: "", link: "" });
  //     setEditingId(null);
  //   }
  // };
  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this project?");
  if (!confirmDelete) return;

  fetch(`${import.meta.env.VITE_SERVER_URL}/projects/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to delete project');
      }
      // Update the UI by removing the deleted project from the state
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    })
    .catch((error) => {
      console.error("Error deleting project:", error);
      alert("Something went wrong while deleting the project.");
    });
};


  const handleEdit = (project) => {
    setForm({
      name: project.name,
      description: project.description,
      link: project.link,
      live_link: project.live_link || "",
  github_link: project.github_link || ""
    });
    setEditingId(project.id);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    
  };
 


  // Cloudinary Upload Function
  const handleImageUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME, // 🔁 Replace with your Cloudinary cloud name
        uploadPreset: "react_unsigned", // 🔁 Replace with your unsigned upload preset
        sources: ["local", "camera", "url"],
        multiple: false,
        cropping: false,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const newImageUrl = result.info.secure_url;
          setForm((prevForm) => ({ ...prevForm, link: newImageUrl }));
        }
      }
    );
  };

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Navbar />
      <div className="ml-[240px] p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Projects Admin</h1>

        {/* Project Form */}
        <form onSubmit={handleSubmit} ref={formRef} className="space-y-4 bg-gray-50 p-6 rounded shadow max-w-lg mb-10">
          <h2 className="text-xl font-semibold">
            {editingId ? "Edit Project" : "Add New Project"}
          </h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Project Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* 🌤️ Image Upload Input */}
          <div className="flex gap-2">
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="Image URL"
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            
            <button
              type="button"
              onClick={handleImageUpload}
              className="bg-black text-white px-4 rounded hover:bg-gray-800 transition"
            >
              Upload Image
            </button>
          </div>
          <input
  name="live_link"
  value={form.live_link}
  onChange={handleChange}
  placeholder="Live Demo URL"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
/>

<input
  name="github_link"
  value={form.github_link}
  onChange={handleChange}
  placeholder="GitHub Repository URL"
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
/>


          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            rows={4}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            {editingId ? "Update Project" : "Add Project"}
          </button>
        </form>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length> 0 && projects.map((proj) => (
            <div key={proj.id} className="rounded-lg shadow p-4 bg-white">
              <img
                src={proj.link}
                alt={proj.name}
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-1">{proj.name}</h2>
              <p className="text-gray-700">{proj.description}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(proj)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(proj.id)}
                  className="text-sm text-red-600 hover:underline"
                  
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
