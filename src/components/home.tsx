
"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-10"
    >
      <span className="bg-gray-700 text-sm px-4 py-1 rounded-full mb-4">
        • Building India’s Health Tech Future
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-snug">
        Helping you create real <br /> change in healthcare
      </h1>

      <p className="text-center max-w-2xl text-gray-300 mb-8">
        At Indrav, we drive healthcare change through the fusion of people and technology. <br />
        Based in India, we create digital health solutions that enhance accessibility and <br />
        efficiency, empowering everyone to shape a healthier future.
      </p>

      <button className="mt-4 px-6 py-2 border border-yellow-500 text-yellow-500 font-medium rounded-md hover:bg-yellow-500 hover:text-black transition duration-300">
        Know more
      </button>
    </section>
  );
};

export default Home;
