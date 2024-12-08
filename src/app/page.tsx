import React from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Products from '@/components/products';
import RoomInspiration from '@/components/Room';
import FuniroFurniture from '@/components/FuniroFurniture';

export default function Home() {
  return (
    <div>
<main>
  <Header />
  <div className="relative">
    <img src='/logo1.png' className='w-screen h-800 absolute'/>
    <div className="bg-peach absolute h-[380px] w-[600px] top-[150px] right-5 rounded-md">
      <div className="absolute left-6 top-12">
      <div className='font-bold tracking-[3px]'>New Arrival</div>
      <div className='text-brown font-bold text-[50px]'>Discover Our <br/>New Collection</div>
      <div className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
      <div><button className='bg-brown w-[160px] h-[60px] mt-[40px] text-white font-bold'>BUY NOW</button></div>
      </div>
    </div>
  </div>
  <div className=" absolute w-full h-[100px] flex flex-col justify-center items-center top-[830px]">
  <div className="font-bold text-[32px] text-black mt-2">Browse The Range</div>
  <div className="text-grey text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</div>
<div className='h-[500px] w-full absolute top-[900px] flex'>
<div className='flex flex-grow-2 gap-x-6 items-center justify-center ml-80'>
<div>
  <img src='/1.png' className='h-80 rounded-md'/>
  <h3 className='font-bold ml-[110px] mt-5'>Dining</h3>
</div>
<div>
  <img src='/2.png' className='h-80 rounded-md' />
  <h3 className='font-bold ml-[110px] mt-5'>Living</h3>
</div>
<div>
  <img src='/3.png' className='h-80 rounded-md' />
  <h3 className='font-bold ml-[110px] mt-5'>Bedroom</h3>
</div>
</div>
</div>
</main>
<div className='w-screen h-[1000px] relative top-[1280px] flex flex-col justify-center items-center'>

  <div className='text-3xl font-bold p-8 mt-0'>Our Products</div>
    <Products />
</div>

<div className='relative top-[1250px] flex items-center justify-center'>
  <div className='w-[1100px]'>
    <RoomInspiration />
  </div>
</div>

<div className="border-t mt-10 pt-4 text-center text-gray-600 text-sm">
      </div>

<div>
<div className='relative top-[1300px] w-[1400px] ml-3 mr-3 h-[820px]'>
  <FuniroFurniture />
</div>
</div>
<div>
<div className='absolute top-[3790px] border-t-2'>
  <Footer />
</div>
</div>

    </div>
  );
}
