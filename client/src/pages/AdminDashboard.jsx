import React from "react";
import Navbar from "../components/Navbar";
import {
  FileText,
  Award,
  Clock,
  Activity,
  CheckCircle,
  PlusCircle,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex bg-white text-black min-h-screen">
      <Navbar />
      <div className="ml-[240px] p-6 w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow-md flex items-center gap-4">
            <FileText className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-sm text-gray-600">Total Projects</h2>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow-md flex items-center gap-4">
            <Award className="w-10 h-10 text-green-600" />
            <div>
              <h2 className="text-sm text-gray-600">Certificates Added</h2>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow-md flex items-center gap-4">
            <Clock className="w-10 h-10 text-yellow-600" />
            <div>
              <h2 className="text-sm text-gray-600">Pending Tasks</h2>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-10 bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-600" />
            Recent Activity
          </h2>
          <ul className="pl-5 text-gray-700 space-y-2 list-disc">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Updated certificate info for "Self-Management"
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-500" />
              Deleted old project: "Portfolio v1"
            </li>
            <li className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-blue-500" />
              Added new project: "Moringa Showcase App"
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
