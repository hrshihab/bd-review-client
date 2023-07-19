import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewItemsCard from './ReviewItemsCard';

const ReviewiItems = () => {
  const {items} = useContext(AuthContext);
  const itemName = Object.keys(items)[1];
  const itemsCollection = items[itemName];
  console.log(itemsCollection);
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {
          itemsCollection.map(item=> <ReviewItemsCard
          key={item.id}
          item={item}
          >

          </ReviewItemsCard>)
        }
        </div>
    </div>
    </section>
  );
};

export default ReviewiItems;