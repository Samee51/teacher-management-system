"use client";

import { Menu, Sun, Moon, CircleUserRound } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    const html = document.documentElement;
    html.classList.toggle("dark");
  };

  return (
    <header className="flex sticky top-0 z-50 items-center justify-between px-4 py-3 bg-white shadow  dark:bg-gray-900 dark:text-white ">
      <button className="md:hidden">
        <Menu size={24} />
      </button>
      <h2 className="flex items-center text-md font-semibold text-gray-800 dark:text-white">
        <CircleUserRound className="me-1 " />
        Teacher Manager
      </h2>
      <button
        onClick={toggleDarkMode}
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}
