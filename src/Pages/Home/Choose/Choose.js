import React from 'react';
import choose from './../../../assets/why-schoos-us.jpg'
import bg from './../../../assets/bg/icon_bg.png'


const Choose = () => {
  return (
    <div className=''>
      <div className='bg-blue-800 grid justify-items-center text-white text-center py-20 my-20 '>
        <h1 className='md:text-4xl text-xl font-semibold'>We’re Leading Digital Agency <br /> For Increasing Sales or Boosting Traffic</h1>

      <p className='my-8 lg:w-3/5 w-3/4'>Scribentur varet per cu dicat copiosae reprimique teim laborey fabulas scriptorem ullamco laboris nisi ut aliquip duis aute irure dolor in reprehenderit</p>
      <button type="button" class="text-white bg-pink-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Discuss Project</button>

      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 grid-flow-row-dense mx-20 gap-10 '>
        <img src={choose} alt="" />
        <div >
          <h2 className='md:text-4xl text-2xl font-semibold mb-10'>Why Choose Us</h2>
          <div className='gap-10 grid'>
          <div className=' grid md:grid-cols-5 lg:grid-cols-7 grid-cols-4'>
            <div className='  grid justify-center' style={{ backgroundImage: `url(${bg})`,width:'70px' ,height:'80px'}}>
              <svg class="w-[38px] h-[38px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="1.3" d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"/>
                </svg></div>
            <div className=' col-span-4 col-start-2'>
              <h2 className='font-semibold text-xl'>Premium Directory</h2>
              <p><svg class="w-[37px] h-[15px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6" d="M1 1h16"/>
  </svg></p>
              <p>Unde omnis iste natus error sit voluptal tem accusantium dolore lamque laudant.</p>
            </div>
          </div>
          <div className=' grid md:grid-cols-5 lg:grid-cols-7 grid-cols-4'>
            <div className='  grid justify-center' style={{ backgroundImage: `url(${bg})`,width:'70px' ,height:'80px'}}>
              <svg class="w-[37px] h-[37px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 17 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6"/>
  </svg></div>
            <div className=' col-span-4 col-start-2'>
              <h2 className='font-semibold text-xl'>Unique Set of Solutions</h2>
              <p><svg class="w-[37px] h-[15px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6" d="M1 1h16"/>
  </svg></p>
              <p>Unde omnis iste natus error sit voluptal tem accusantium dolore lamque laudant.</p>
            </div>
          </div>
          <div className=' grid md:grid-cols-5 lg:grid-cols-7 grid-cols-4'>
            <div className='  grid justify-center' style={{ backgroundImage: `url(${bg})`,width:'70px' ,height:'80px'}}>
            <svg class="w-[37px] h-[37px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
  </svg></div>
            <div className=' col-span-4 col-start-2'>
              <h2 className='font-semibold text-xl'>Enrich Web Experience</h2>
              <p><svg class="w-[37px] h-[15px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6" d="M1 1h16"/>
  </svg></p>
              <p>Unde omnis iste natus error sit voluptal tem accusantium dolore lamque laudant.</p>
            </div>
          </div>
          </div>
      
        </div>
      </div>
      
    </div>
  );
};

export default Choose;