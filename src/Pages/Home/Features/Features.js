import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="text-center mt-24">
      <div>
        <p className="text-4xl font-bold">Get Started Today!</p>
        <p className="mt-4 mb-14">
          Excepteur sint occaecat cupidatat proident sunt ipsum culpaui <br />{" "}
          officia deserunt mollit any laboruys sedut perspiciatis iste
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-14 justify-items-center lg:gap-0 gap-8   ">
        <div className="w-3/5 ">
          <div className="grid justify-center bg-blue-500 px-8 py-5 rounded-3xl w-8 mx-auto">
            <svg
              class="w-6 h-6 text-white  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mt-4">Lots of Categories</h2>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, deserunt?
          </p>
          <Link>
          <button type="button" class="mt-5 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>

          </Link>
        </div>
        <div className="w-3/5 ">
          <div className="grid justify-center bg-pink-500 px-8 py-5 rounded-3xl w-8 mx-auto">
          <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 1v4a1 1 0 0 1-1 1H1m4 10v-2m3 2v-6m3 6v-4m4-10v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
  </svg>
          </div>

          <h2 className="text-xl font-semibold mt-4">Add Your Business</h2>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, deserunt?
          </p>
          <Link>
          <button type="button" class="mt-5 px-3 py-2 text-xs font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>

          </Link>
        </div>
        <div className="w-3/5 ">
          <div className="grid justify-center bg-blue-500 px-8 py-5 rounded-3xl w-8 mx-auto">
          <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
  </svg>
          </div>

          <h2 className="text-xl font-semibold mt-4">Promote Business</h2>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, deserunt?
          </p>
          <Link>
          <button type="button" class="mt-5  px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>

          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
