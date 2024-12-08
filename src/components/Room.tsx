import React from 'react';

export default function RoomInspiration() {
  return (
    <div className="flex flex-col md:flex-row bg-beige text-gray-800 p-8 space-y-4 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="flex-1 mt-28 ml-11">
        <h1 className="text-3xl font-bold mb-4">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="mb-6">
          Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you.
        </p>
        <button className="px-6 py-2 bg-brown text-white rounded-sm">
          Explore More
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Image */}
        <div className="relative">
          <img
            src="/room1.png" // Replace with your image path
            alt="Room 1"
            className="rounded-lg object-cover"
          />
          <div className="absolute h-20 w-40 bottom-10 left-4 right-4 p-4 bg-white bg-opacity-75">
            <h3 className="text-sm">01 — Bed Room</h3>
            <p className="text-xl font-semibold">Inner Peace</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative">
          <img
            src="/room2.png" // Replace with your image path
            alt="Room 2"
            className="rounded-lg object-cover"
          />
          {/* Circles under the second image */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
