import React from 'react';
import Image from 'next/image';

const NewestDeals = () => {
  return (
    <div className='py-10 '>
      <h1 className='text-4xl font-bold text-center '>NEWEST DEALS</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {/* Deal cards */}
        <div className="deal bg-white drop-shadow-2xl rounded-xl">
          <div className='relative h-[350px]'>
            <Image src="/house1.jpg" alt="House 1" layout="fill" objectFit="cover" className='rounded-t-xl' />
            <div className='absolute top-0 right-0 p-4'>

            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>5 bed</p>
              </div>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>3 bat</p>
              </div>
              <div className='flex items-center space-x-1'>
              </div>
            </div>
            <h1 className='text-2xl font-semibold'>king palace</h1>
            <div className='flex items-center space-x-2'>

              <p className='text-sm text-gray-600'>Dubai ,uae</p>
            </div>
          </div>
        </div>
        <div className="deal bg-white drop-shadow-2xl rounded-xl">
          <div className='relative h-[350px]'>
            <Image src="/house3.jpg" alt="House 1" layout="fill" objectFit="cover" className='rounded-t-xl' />
            <div className='absolute top-0 right-0 p-4'>

            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>5 bed</p>
              </div>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>3 bat</p>
              </div>
              <div className='flex items-center space-x-1'>
              </div>
            </div>
            <h1 className='text-2xl font-semibold'>king palace</h1>
            <div className='flex items-center space-x-2'>

              <p className='text-sm text-gray-600'>Dubai ,uae</p>
            </div>
          </div>
        </div>
        <div className="deal bg-white drop-shadow-2xl rounded-xl">
          <div className='relative h-[350px]'>
            <Image src="/house5.jpg" alt="House 1" layout="fill" objectFit="cover" className='rounded-t-xl' />
            <div className='absolute top-0 right-0 p-4'>

            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>5 bed</p>
              </div>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>3 bat</p>
              </div>
              <div className='flex items-center space-x-1'>
              </div>
            </div>
            <h1 className='text-2xl font-semibold'>king palace</h1>
            <div className='flex items-center space-x-2'>

              <p className='text-sm text-gray-600'>Dubai ,uae</p>
            </div>
          </div>
        </div>
        <div className="deal bg-white drop-shadow-2xl rounded-xl">
          <div className='relative h-[350px]'>
            <Image src="/house6.jpg" alt="House 1" layout="fill" objectFit="cover" className='rounded-t-xl' />
            <div className='absolute top-0 right-0 p-4'>

            </div>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex space-x-5 items-center'>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>5 bed</p>
              </div>
              <div className='flex items-center space-x-1'>

                <p className='text-sm text-gray-400'>3 bat</p>
              </div>
              <div className='flex items-center space-x-1'>
              </div>
            </div>
            <h1 className='text-2xl font-semibold'>king palace</h1>
            <div className='flex items-center space-x-2'>

              <p className='text-sm text-gray-600'>Dubai ,uae</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center py-5'>
        <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'>
          <span>View More</span>
        </button>
      </div>
    </div>
  )
}

export default NewestDeals;
