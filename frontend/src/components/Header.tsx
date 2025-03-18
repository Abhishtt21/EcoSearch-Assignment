import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            EcoSearch
          </span>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-green-500 transition-all relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="w-6 h-0.5 bg-gray-800 mb-1 transition-all"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-gray-800 mb-1 transition-all"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-gray-800 transition-all"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-white shadow-md absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-green-500 transition-all"
            >
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
