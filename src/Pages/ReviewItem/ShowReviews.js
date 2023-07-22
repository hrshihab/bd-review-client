import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider';

const ShowReviews = ({id}) => {
    const [reviews,setReviews] = useState([]);
    const {shouldFetch,setShouldFetch} = useContext(AuthContext)
  
    useEffect(()=> {
       
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'GET',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify()
            })
            .then(res=>res.json())
            .then(result=> setReviews(result))
            .catch(error=>console.error(error))
            //console.log('hae aschilo');
            setShouldFetch(false);
        
       
    },[shouldFetch])

    const handleDelete = async(_id)=> {

        try
        {
            const agree = window.confirm('Are you sure delete the Review ?')
            if(agree) {
                const response = await fetch(`http://localhost:5000/reviews/${_id}`,{
             method:'DELETE',
             headers:{
                 'content-type':'application/json',
             },
             body: JSON.stringify()
         })
         const result = await response.json();
         if(result.deletedCount > 0){
             const newReviews = reviews.filter(review=> review._id !== _id)
             //console.log(newReviews);
             setReviews(newReviews);
         }
         //console.log("Success:", result);
            }
         
       } catch (error) {
         console.error("Error:", error);
       }

 }
    
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">All Reviews</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
        </div> 
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {
                reviews?.map(review=> <ReviewCard
                key={review._id}
                review={review}
                handleDelete = {handleDelete}></ReviewCard>)
            }
 
        </div>  
    </div>
  </section>
  );
};

export default ShowReviews;