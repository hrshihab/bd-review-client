import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleSign = () => {
  const {gSignIn} = useContext(AuthContext);
  const  location = useLocation();
  const  navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleSignin = () => {
    gSignIn()
    .then(res=> {
      console.log(res);
      navigate(from,{replace:true})
    })
    .catch(error=> console.error(error))

  }
  return (
   <button onClick={handleSignin} className='flex gap-3 items-center text-gray-600 font-medium border-2 border-gray-200 px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-gray-200'>
      <FcGoogle/> Sign in with Google
   </button>
  );
};

export default GoogleSign;