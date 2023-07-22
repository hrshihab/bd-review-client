import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const loaction = useLocation();
  if(loading) {
    return <div>loading...</div>
  }
  if(user?.uid){
    return children
  }
  return (
    <Navigate to='/signin' state ={{from:loaction}} replace ></Navigate>
  );
};

export default PrivateRoutes;