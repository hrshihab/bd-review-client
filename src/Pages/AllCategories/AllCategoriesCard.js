import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AllCategoriesCard = ({category}) => {
  const {setItems} = useContext(AuthContext)
  const categoryName = Object.keys(category)[1];
  
    //console.log(category);
    const handleClick = ()=> {
      //console.log(category,'click koresilio');
      setItems(category);
      //console.log(items,'uff chere deu');
      
    }
  return (
 
   <div className='border border-gray-200 rounded-lg shadow  px-5 py-3 hover:bg-gray-100 hover:cursor-pointer '>
    
  

   
    <Link to={`/reviewItems/${categoryName}`} onClick={handleClick}>
    
   
     <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">{categoryName}</h3>
          <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

          <ul  className="space-y-5 my-7">
           {
            category[categoryName].slice(0,5).map(item=> <li class="flex space-x-3 items-center">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{item.name}</span>
        </li>)
           }
            
          </ul>

          </Link>
         

  </div>
  
  
  );
};

export default AllCategoriesCard;