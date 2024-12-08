"use client";

import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaGreaterThan } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Contact() {
    const [showCount, setShowCount] = useState(16);
    const totalResults = 32;

    const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowCount(Number(e.target.value));
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Sorting by:", e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <div>
            <Header />

            <div className='relative top-[100px] left-[690px]'>
                <img src='/logo.png' className='w-16 h-16' />
            </div>

            <div className="relative flex items-center justify-center">
                <img src="/shop 1.png" alt="Shop Banner" className="relative" />

                <div className="absolute top-[100px] font-sans font-bold text-3xl text-black">
                    <h1 className="relative font-bold left-[40px]">Contact</h1>
                    <div className="flex flex-col text-[20px] font-light">
                        <h2 className="flex items-center">
                            Home <FaGreaterThan className="mx-2" /> Contact
                        </h2>
                    </div>
                </div>
            </div>

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
                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-600 text-2xl">📍</span>
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-600 text-2xl">📞</span>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p>Mobile: + (84) 546-6789</p>
                                <p>Hotline: + (84) 456-6789</p>
                            </div>
                        </div>

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Abc"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="abc@def.com"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="This is optional"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Hi! I'd like to ask about..."
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>

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

            {/* Additional Info Section */}
            <div className="flex justify-between items-center bg-orange-200 px-10 py-6 mt-3">
                <div className="flex items-center space-x-4">
                    <i className="text-2xl">
                        <GrTrophy />
                    </i>
                    <div>
                        <h3 className="font-bold text-lg">High Quality</h3>
                        <p className="text-sm text-gray-600">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <i className="text-2xl">
                        <SiTicktick />
                    </i>
                    <div>
                        <h3 className="font-bold text-lg">Warranty Protection</h3>
                        <p className="text-sm text-gray-600">Over 2 years</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <i className="text-2xl">
                        <FaHandHoldingHeart />
                    </i>
                    <div>
                        <h3 className="font-bold text-lg">Free Shipping</h3>
                        <p className="text-sm text-gray-600">Order over 150 $</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <i className="text-2xl">
                        <BiSupport />
                    </i>
                    <div>
                        <h3 className="font-bold text-lg">24 / 7 Support</h3>
                        <p className="text-sm text-gray-600">Dedicated support</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
