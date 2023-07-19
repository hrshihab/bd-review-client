import React from 'react';
import slideImg from '../../../assets/bg/image001.png'

const Slides = () => {
  return (
    <div className='grid grid-cols-2 mt-14  mx-auto'>
      <div className=' px-8 md:px-20 md:ml-12  '>
      <p className='md:text-5xl text-xl font-bold md:leading-tight'>University Reviews <br /> From The Students <br /> Just Like You</p>
      <p className='my-6'>Reviews get you closer to your customers and <br /> empower your business forward.</p>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cyan to Blue</button>

      </div>
      <div className=''>
        <img src={slideImg} alt=''></img>
      </div>
        
       </div>
  );
};

export default Slides;