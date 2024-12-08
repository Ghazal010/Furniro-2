"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { GrTrophy } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import Shop1 from '@/components/Shop1';
import Products from '@/components/products';

export default function Shop() {
    const [showCount, setShowCount] = useState(16); 
    const totalResults = 32; 

    const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowCount(Number(e.target.value));
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Sorting by:", e.target.value); 
    };

    return (
        <div>
            <div>
                <Header />
            </div>

            <div>
                <div className='relative top-[100px] left-[690px]'>
                    <img src='/logo.png' className='w-16 h-16'/>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="/shop 1.png" alt="Shop Banner" className="relative" />

                    <div className="absolute top-[100px] font-sans font-bold text-3xl text-black">
                        <h1 className="relative font-bold left-[40px]">Shop</h1>

                        <div className="flex flex-col text-[20px] font-light">
                            <h2 className="flex items-center">
                                Home <FaGreaterThan className="mx-2" /> Shop
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="bg-peach w-screen h-[70px] relative flex justify-between items-center px-8">
                    <button className="flex items-center space-x-2 px-4 py-2">
                    <IoFilterOutline /> 
                    <span>Filter</span>
                    </button>
                    <span><HiOutlineSquares2X2 className='ml-[-100px]'/></span>
                    <span><AiOutlineBoxPlot className='ml-[-140px]'/></span>

                    <div className="text-black ml-[-100px]">
                        Showing {1}-{Math.min(showCount, totalResults)} of {totalResults} results
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="showCount" className="text-black">Show</label>
                        <input
                            id="showCount"
                            type="number"
                            value={showCount}
                            onChange={handleShowChange}
                            className="w-16 p-1 border rounded-md text-center"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="sortBy" className="text-black">Sort by</label>
                        <select
                            id="sortBy"
                            onChange={handleSortChange}
                            className="px-2 py-1 border rounded-md"
                        >
                            <option value="default">Default</option>
                            <option value="priceLowHigh">Price: Low to High</option>
                            <option value="priceHighLow">Price: High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </div>
<div>
   <Shop1 /> 
   <Shop1 />
   <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', padding: '10px' }}>
  {[1, 2, 3].map((page) => (
    <button
      key={page}
      onClick={() => console.log(`Page ${page} clicked`)} // Yahan apna onClick logic lagayein
      style={{
        backgroundColor: page === 1 ? '#b58900' : '#f8f5ec', // 1 ko active dikhana
        color: page === 1 ? '#fff' : '#000',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px 15px',
        cursor: 'pointer',
      }}
    >
      {page}
    </button>
  ))}
  <button
    onClick={() => console.log('Next clicked')} // Yahan "Next" ke liye logic lagayein
    style={{
      backgroundColor: '#f8f5ec',
      color: '#000',
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
    }}
  >
    Next
  </button>
</div>

</div>

           <div>
           <div className="flex justify-between items-center bg-peach px-8 py-6 mt-3">
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

           </div>
            <div className='border-t-2 mt-3'>
                <Footer />
            </div>
        </div>
    );
}
