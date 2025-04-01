import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div
        className="relative flex flex-col md:flex-row items-center max-w-7xl w-full p-8 overflow-hidden bg-cover bg-center rounded"
        style={{
          backgroundImage: `url('/Photo_1743498194060.png')`,
          height: "70vh",
        }}
      >
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h2 className="text-2xl font-bold text-gray-800 mt-20">About us</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur
            adipiscing elit.
          </p>
          <button className="mt-6 bg-[#FF6400] text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
