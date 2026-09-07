import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDark } from "../context/Dark-Context";

export default function RootLayout() {
  const { isDark, toggleDark } = useDark();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
      }`}
    >
      <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="text-3xl font-bold">
            Y<span className="text-blue-400">R</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
            <Link to="/" className="transition hover:text-blue-300">
              Hero
            </Link>
            <Link to="/about" className="transition hover:text-blue-300">
              About
            </Link>
            <Link to="/skill" className="transition hover:text-blue-300">
              Skill
            </Link>
            <Link to="/portofolio" className="transition hover:text-blue-300">
              Portfolio
            </Link>
            <Link to="/contacts" className="transition hover:text-blue-300">
              Contact
            </Link>

            <button
              onClick={toggleDark}
              className="rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium transition hover:bg-blue-700"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden bg-blue-950 border-t border-blue-800 px-6 py-4 flex flex-col gap-4 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-300"
            >
              Hero
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-300"
            >
              About
            </Link>
            <Link
              to="/skill"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-300"
            >
              Skill
            </Link>
            <Link
              to="/portofolio"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-300"
            >
              Portfolio
            </Link>
            <Link
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-blue-300"
            >
              Contact
            </Link>

            <button
              onClick={() => {
                toggleDark();
                setIsOpen(false);
              }}
              className="w-full text-left py-2 text-blue-300 font-semibold"
            >
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </nav>
        )}
      </header>

      <main
        className={`w-full max-w-7xl mx-auto flex-1 px-4 sm:px-6 py-8 sm:py-16 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-800"
        }`}
      >
        <Outlet />
      </main>

      <footer
        className={`py-8 text-center text-gray-400 border-t ${
          isDark ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-200"
        }`}
      >
        <p>© {new Date().getFullYear()} YR. All rights reserved.</p>
      </footer>
    </div>
  );
}