"use client";
import Image from "next/image";
import { FormEvent } from "react";

const Footer = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add email handling logic here
  };

  return (
    <footer className="relative text-white px-6 pt-30 pb-10 ">
      {/* Subscribe Section */}
      <section className="bg-[#1667C1] text-white rounded-xl px-8 py-8 max-w-4xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Heading and Text */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Join Indrav—Your Gateway to Smarter Healthcare
            </h2>
            <p className="text-sm md:text-base text-white/80">Coming Soon...</p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your work email"
              className="px-2 py-2 rounded-md text-black w-full md:w-60 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Get started
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-row justify-between items-start gap-10 flex-wrap">
        {/* Logo Left */}
        <div className="flex-shrink-0 ml-auto">
          <Image
            src="/images/logo.jpg"
            alt="Indrav Logo"
            width={120}
            height={120}
            className="object-contain h-32 w-auto"
          />
        </div>

        {/* Links Right */}
        <div className="flex flex-row justify-between gap-20 flex-wrap ml-auto">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Product</li>
              <li className="cursor-pointer hover:text-white">Our Story</li>
              <li className="cursor-pointer hover:text-white">Testimonials</li>
              <li className="cursor-pointer hover:text-white">QNA</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-white mb-3">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Contact Us</li>
              <li className="cursor-pointer hover:text-white">Our Policies</li>
              <li className="cursor-pointer hover:text-white">Account</li>
              <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-3">Social</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Facebook</li>
              <li className="cursor-pointer hover:text-white">Instagram</li>
              <li className="cursor-pointer hover:text-white">Twitter</li>
              <li className="cursor-pointer hover:text-white">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600 relative z-10" />

      {/* Bottom Row */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-100 gap-4">
        <div>© 2023 Fiance Move. All rights reserved</div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-end">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>|
          <span className="hover:underline cursor-pointer">Sitemap</span>|
          <span className="hover:underline cursor-pointer">Privacy Policy</span>|
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
