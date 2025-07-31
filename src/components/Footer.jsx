import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center h-[10vh] items-center mt-10">
      <div className="w-[80%] border-t-2 border-gray-300">
        <div className="mt-6 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Faith Nkarichia. Built with  React & Tailwind CSS.
        </div>
      </div>
    </div>
  );
}
