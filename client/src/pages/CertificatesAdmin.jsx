import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function CertificatesAdmin() {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Self-Management",
      issuer: "African Management Institute",
      date: "2025",
      link: "#",
      description:
        "Built habits around self-discipline, focus, and resilience to achieve consistent performance.",
    },
    {
      id: 2,
      title: "Software Engineering",
      issuer: "Moringa School",
      date: "2025",
      link: "#",
      description:
        "Focused on full-stack development using React, Python, and PostgreSQL.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    issuer: "",
    date: "",
    link: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.issuer || !form.date || !form.link || !form.description) return;

    if (editingId) {
      setCertificates((prev) =>
        prev.map((cert) =>
          cert.id === editingId ? { ...cert, ...form } : cert
        )
      );
      setEditingId(null);
    } else {
      const newCertificate = {
        id: Date.now(),
        ...form,
      };
      setCertificates([newCertificate, ...certificates]);
    }

    setForm({
      title: "",
      issuer: "",
      date: "",
      link: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };

  const handleEdit = (cert) => {
    setForm(cert);
    setEditingId(cert.id);
  };

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Navbar />
      <div className="ml-[240px] p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Manage Certificates</h1>

        {/* Certificate Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Certificate Title"
            className="w-full p-2 border border-black rounded"
          />
          <input
            name="issuer"
            value={form.issuer}
            onChange={handleChange}
            placeholder="Issuer"
            className="w-full p-2 border border-black rounded"
          />
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Date"
            className="w-full p-2 border border-black rounded"
          />
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="Certificate Link"
            className="w-full p-2 border border-black rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border border-black rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded"
          >
            {editingId ? "Update Certificate" : "Add Certificate"}
          </button>
        </form>

        {/* Certificate List */}
        <div className="mt-10 space-y-4">
          {certificates.length === 0 ? (
            <p className="text-gray-500">No certificates added yet.</p>
          ) : (
            certificates.map((cert) => (
              <div
                key={cert.id}
                className=" p-4 rounded shadow-sm"
              >
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-sm italic text-gray-700">{cert.issuer} — {cert.date}</p>
                <p className="mt-2">{cert.description}</p>
                <a
                  href={cert.link}
                  className="block mt-2 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
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
