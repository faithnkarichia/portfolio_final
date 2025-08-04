import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[240px] h-screen fixed top-0 left-0 bg-white shadow-lg p-6 flex flex-col justify-between">
        {/* Top menu */}
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">MyApp</h2>

          <button
            onClick={() => navigate("/adminDashboard")}
            className="w-full px-4 py-2 rounded-md text-left text-gray-700 hover:bg-black hover:text-white transition"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/projectsAdmin")}
            className="w-full px-4 py-2 rounded-md text-left text-gray-700 hover:bg-black hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => navigate("/certificatesAdmin")}
            className="w-full px-4 py-2 rounded-md text-left text-gray-700 hover:bg-black hover:text-white transition"
          >
            Certificates
          </button>
        </div>

        {/* Bottom logout button */}
        <div>
          <button
            onClick={() => navigate("/")}
            className="w-full px-4 py-2 rounded-md text-left text-red-600 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Spacer for the sidebar */}
      {/* <div className="ml-[240px] w-full p-6"> */}
        {/* Main content goes here if needed */}
        {/* <p className="text-gray-500">Main content here...</p>
      </div> */}
    </div>
  );
}
