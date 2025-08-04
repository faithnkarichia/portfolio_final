import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Personal Portfolio",
      image: "https://via.placeholder.com/150",
      description: "A responsive portfolio showcasing my web development projects.",
    },
    {
      id: 2,
      name: "E-Commerce Store",
      image: "https://via.placeholder.com/150",
      description: "An online store with product listings, cart, and checkout flow.",
    },
  ]);

  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [editingId, setEditingId] = useState(null); // Track if we're editing

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.image) return;

    if (editingId) {
      // Editing an existing project
      const updated = projects.map((proj) =>
        proj.id === editingId ? { ...proj, ...form } : proj
      );
      setProjects(updated);
      setEditingId(null);
    } else {
      // Adding new project
      const newProject = {
        id: Date.now(),
        ...form,
      };
      setProjects([newProject, ...projects]);
    }

    // Clear form
    setForm({ name: "", description: "", image: "" });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id));
    if (editingId === id) {
      setForm({ name: "", description: "", image: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (project) => {
    setForm({
      name: project.name,
      description: project.description,
      image: project.image,
    });
    setEditingId(project.id);
  };

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Navbar />
      <div className="ml-[240px] p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Projects Admin</h1>

        {/* Project Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded shadow max-w-lg mb-10">
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
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
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
          {projects.map((proj) => (
            <div key={proj.id} className=" rounded-lg shadow p-4 bg-white">
              <img
                src={proj.image}
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
