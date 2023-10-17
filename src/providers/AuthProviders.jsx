/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const user = {displayName: 'Mr. Rashid'}

    const authInfo = {
        user
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;