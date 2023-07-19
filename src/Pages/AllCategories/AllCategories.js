import React, { useEffect, useState } from 'react';
import AllCategoriesCard from './AllCategoriesCard';

const AllCategories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/allcategory')
    .then(res=>res.json())
    .then(result=> setCategories(result))
    console.log(categories);
    
  },[])
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
         <div class="max-w-screen-md mb-8 lg:mb-16 ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>

      
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {
            categories.map(cat=> <AllCategoriesCard
            key={cat._id}
            category={cat}></AllCategoriesCard>)
          }

          </div>
          
      </div>
      
     
      
    </section>
  );
};

export default AllCategories;