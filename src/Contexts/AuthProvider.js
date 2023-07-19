import React, { createContext, useState } from 'react';


export const AuthContext = createContext([]);
const AuthProvider = ({children}) => {
  const [items,setItems] = useState([]);

  const authInfo = {
     items,
     setItems
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;