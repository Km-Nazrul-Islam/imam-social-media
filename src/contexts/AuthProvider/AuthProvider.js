import React from 'react';
import { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';


const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;