import React from "react";

export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <p className="text-gray-600 mt-2">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always there to help you out. Do not hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">📍</span>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">📞</span>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>Mobile: + (84) 546-6789</p>
              <p>Hotline: + (84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <span className="text-yellow-600 text-2xl">⏰</span>
            <div>
              <h3 className="text-lg font-semibold">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@def.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
                </label>
<textarea
  id="message"
  rows={4}
  placeholder="Hi! I'd like to ask about..."
  className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
