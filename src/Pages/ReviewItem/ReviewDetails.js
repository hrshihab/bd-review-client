import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import kuimage from './ku.jpg'
import AddReviewForm from './AddReviewForm';
import ShowReviews from './ShowReviews';

const ReviewDetails = () => {
  const result = useLoaderData();
  const {items,keys} = result;

const field = Object.keys(items)[0];
const data = items[field].find(itm=> itm.id===keys)
const {name,description,address,phone,image,id,email,type} = data;
console.log(data);

  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-4">
      <div class="max-w-screen-lg mb-8 lg:mb-16 grid  md:grid-cols-5 grid-cols-1 md:gap-5">
       
          <img className=' md:col-span-2  rounded-xl  h-72 ' src={kuimage} alt="" />
          <div className=' md:col-span-3'>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{name}</h2>
          <p class="text-gray-500 sm:text-lg dark:text-gray-400 mb-5">{description}</p>
          <p className='text-gray-600 sm:text-md dark:text-gray-500'>Address: {address}</p>
          <p className='text-gray-600 sm:text-md dark:text-gray-500'>Phone: {phone}</p>
          <p className='text-gray-600 sm:text-md dark:text-gray-500'>Email: {email}</p>
          </div>
         
      </div>
      <div>
        <ShowReviews id={id}></ShowReviews>
      </div>
      <div class="space-y-8   md:space-y-0">
         <AddReviewForm id={id}></AddReviewForm>
      </div>
  </div>
</section>
  );
};

export default ReviewDetails;