import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* Products container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/* Single container */}
        <div className='flex items-center justify-between mb-4'>
          <Image
            width={100}
            height={100}
            className=''
            src="/temporary/p1.png"
            alt=''
          // fill
          />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Title</h1>
            <span>Option</span>
          </div>
          <h2 className='font-bold '>₹96</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/* Single container */}
        <div className='flex items-center justify-between mb-4'>
          <Image
            width={100}
            height={100}
            className=''
            src="/temporary/p1.png"
            alt=''
          // fill
          />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Title</h1>
            <span>Option</span>
          </div>
          <h2 className='font-bold '>₹69</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/* Single container */}
        <div className='flex items-center justify-between mb-4'>
          <Image
            width={100}
            height={100}
            className=''
            src="/temporary/p1.png"
            alt=''
          // fill
          />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Title</h1>
            <span>Option</span>
          </div>
          <h2 className='font-bold '>₹69</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* payment Contaier */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className="flex justify-between">
          <span className="p-2"> Subtotal (3 items) </span>
          <span className="p-2">₹99</span>
        </div>
        <div className="flex justify-between">
          <span className="p-2"> Service Cost </span>
          <span className="p-2">₹0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="p-2"> Delivery Cost</span>
          <span className="p-2 text-green-500 uppercase">Free!</span>
        </div>
        <hr className='my-2' />
        <div className="flex justify-between">
          <span className="p-2 uppercase"> Total(Incl vat) </span>
          <span className="p-2 uppercase font-bold">₹99.03</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
