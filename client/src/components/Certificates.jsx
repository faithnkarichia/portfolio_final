import React, { useState, useEffect } from "react";
import { Glasses } from "lucide-react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // 🌟 For image popup
  const [isModalOpen, setIsModalOpen] = useState(false);    // 🌟 Modal visibility

  useEffect(() => {
    fetch("http://127.0.0.1:5000/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  const handleViewImage = (url) => {
    setSelectedImage(url);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 md:p-10 flex flex-col items-center" id="certificates">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Glasses className="text-primary" />
        <h2 className="text-3xl font-bold text-center">Certificates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {certificates.length > 0 &&
  certificates.map((cert, index) => (
    <div key={index} className="p-4 rounded shadow bg-white">
      <h3 className="text-xl font-semibold">{cert.title}</h3>
      <p className="text-sm text-gray-600">
        {cert.issuer} — {cert.date}
      </p>
      <p className="mt-2">{cert.description}</p>

      {cert.link ? (
        <button
          onClick={() => handleViewImage(cert.link)}
          className="text-blue-500 underline mt-2 inline-block"
        >
          View Certificate
        </button>
      ) : (
        <span className="block mt-3 p-3 border border-dashed border-gray-300 rounded text-gray-400 text-center italic">
  Graduating in November
</span>

      )}
    </div>
  ))}

      </div>

      {/* 🌟 Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-red-500 text-xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
