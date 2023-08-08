import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

const FeaturedItems = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Item */}
        {featuredProducts.map(item => (

          <div 
          key={item.id} 
          className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl-h[90vh]'>
            {/* Image Container (Displaying above the Text Container) */}
            {item.img && (
              <div className='relative flex-1 w-full order-1 hover:rotate-[60deg] transition-all duration-500'>
                <Image
                  src={item.img}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>)}
            {/* Text Container (Displaying below the Image Container) */}
            <div className='flex flex-1 flex-col items-center justify-center text-center gap-4 order-2'>
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
              <p className='p-4 2xl:p-8'>{item.desc}</p>
              <span className='text-xl font-bold'>₹{item.price}</span>
              <button className='bg-red-500 text-white p-2 rounded-md'>Add To Cart</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default FeaturedItems;
