import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext([]);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [items,setItems] = useState([]);
  const [shouldFetch,setShouldFetch] = useState(true);

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(true);

  const gProvider = new GoogleAuthProvider();

  const gSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,gProvider);
  }
  const signUp = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);

  }
  
  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  useEffect(()=> {
    const unsubscribe = () => {
      onAuthStateChanged(auth,currentUser=> {
        setUser(currentUser);
        setLoading(false);
      })
    }
    return ()=> {
      unsubscribe();
    }
  },[])
  const authInfo = {
     items,
     setItems,
     user,
     loading,
     shouldFetch,
     setShouldFetch,
     gSignIn,
     signIn,
     signUp,
     logOut

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