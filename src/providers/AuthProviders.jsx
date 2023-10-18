/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    ;

    const createUSer = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)


    }
    const logout =() =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUSer,
        signIn,
        logout
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("user logged in")
            setUser(loggedUser)
        })

        return () =>{
            unsubscribe();
        }
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;