import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="IlokaSpark Technologies"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              IlokaSpark Technologies
            </h1>

            <p className="text-xs text-gray-300">
              Electrical Engineering Services
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-blue-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg transition"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-center py-3 rounded-lg"
          >
            WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}