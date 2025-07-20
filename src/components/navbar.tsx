


"use client";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      {/* Left: Logo */}
      
      <div className="flex items-center space-x-6">
          <Image src="/images/logo.jpg" alt="Indrav Logo" width={100} height={80} />
       </div>

      {/* Center: Navigation Links */}
      <ul className="flex space-x-6 text-lg font-semibold text-white">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-yellow-400 transition">
            Products
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-yellow-400 transition">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-yellow-400 transition">
            QNA
          </a>
        </li>
      </ul>

      {/* Right: Contact Us button */}
      <a
        href="#contact"
        className="ml-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
