import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { width };
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const { width } = useViewport();
  const isSmallScreen = width < 640;

  // Handle clicking outside the input box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleJoinWaitlist = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      await axios.post(`${API_URL}/waitlist`, { email });
      toast.success("Successfully joined the waitlist!");
      setEmail("");
      setIsFocused(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to join. Please try again.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#fef9f6] px-6 sm:px-8 md:px-12 lg:px-20 text-center pt-24">
      <Toaster position="top-center" />

      {/* Hero Text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Powering the Future with  
        <br />
        <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">
          Green AI Innovation
        </span>
      </motion.h1>

      <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
        Join us in revolutionizing AI with sustainable and energy-efficient technologies.
      </p>

      {/* Input & Button Section */}
      <motion.div
  ref={inputRef}
  // Use Tailwind classes for widths instead of inline style with rem units
  className="mt-6 flex flex-col sm:flex-row items-center gap-3 bg-white p-3 rounded-full shadow-lg w-full sm:max-w-md md:max-w-lg"
  // Remove or simplify the width animation to avoid overflow on small screens
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    onFocus={() => setIsFocused(true)}
    className="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
  />

  <AnimatePresence>
    {(isFocused || isSmallScreen) && (
      <motion.button
        onClick={handleJoinWaitlist}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition-all whitespace-nowrap w-full sm:w-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        Join the waitlist
      </motion.button>
    )}
  </AnimatePresence>
</motion.div>
    </section>
  );
}
