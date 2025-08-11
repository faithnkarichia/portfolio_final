import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";

export default function CertificatesAdmin() {
  const [certificates, setCertificates] = useState([]);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    issuer: "",
    date: "",
    link: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  // 🔄 Fetch certificates
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/certificates`)
      .then((res) => res.json())
      .then((data) => Array.isArray(data) && setCertificates(data))
      .catch((err) => console.error("Error fetching certificates:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME, 
        uploadPreset: "react_unsigned", 
        sources: ["local", "camera", "url"],
        multiple: false,
        cropping: false,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const imageUrl = result.info.secure_url;
          setForm((prevForm) => ({ ...prevForm, link: imageUrl }));
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = editingId
      ? `${import.meta.env.VITE_SERVER_URL}/certs/${editingId}`
      : `${import.meta.env.VITE_SERVER_URL}/add_certs`;

    const method = editingId ? "PUT" : "POST";

    fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/certificates`)
          .then((res) => res.json())
          .then((updated) => setCertificates(updated));
        resetForm();
      })
      .catch((err) => console.error("Error saving cert:", err));
  };

  const handleEdit = (cert) => {
    setForm(cert);
    setEditingId(cert.id);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this certificate?")) return;

    fetch(`${import.meta.env.VITE_SERVER_URL}/certs/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setCertificates((prev) => prev.filter((cert) => cert.id !== id));
        if (editingId === id) resetForm();
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const resetForm = () => {
    setForm({
      title: "",
      issuer: "",
      date: "",
      link: "",
      description: "",
    });
    setEditingId(null);
  };

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Navbar />
      <div className="ml-[240px] p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Manage Certificates</h1>

        {/* Certificate Form */}
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="space-y-4 max-w-xl bg-gray-50 p-6 rounded shadow"
        >
          <h2 className="text-xl font-semibold">
            {editingId ? "Edit Certificate" : "Add Certificate"}
          </h2>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Certificate Title"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            name="issuer"
            value={form.issuer}
            onChange={handleChange}
            placeholder="Issuer"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Date"
            className="w-full p-3 border border-gray-300 rounded"
          />

          {/* Image Upload Input */}
          <div className="flex gap-2">
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="Image URL"
              className="flex-1 p-3 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="bg-black text-white px-4 rounded hover:bg-gray-800"
            >
              Upload Image
            </button>
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded"
            rows={3}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            {editingId ? "Update Certificate" : "Add Certificate"}
          </button>
        </form>

        {/* Certificate List */}
        <div className="mt-10 space-y-6">
          {certificates.length === 0 ? (
            <p className="text-gray-500">No certificates added yet.</p>
          ) : (
            certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-4 border rounded shadow-sm bg-white"
              >
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-sm italic text-gray-700">
                  {cert.issuer} — {cert.date}
                </p>
                <p className="mt-2">{cert.description}</p>

                {cert.link && (
                  <img
                    src={cert.link}
                    alt={cert.title}
                    className="mt-4 rounded w-full max-h-60 object-contain"
                  />
                )}

                <div className="flex gap-4 mt-3">
                  <button
                    onClick={() => handleEdit(cert)}
                    className="text-yellow-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cert.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
