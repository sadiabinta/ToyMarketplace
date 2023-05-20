import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth= getAuth(app);
const providerGoogle= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const signUp=(email,password,name,photo)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password,name,photo)

    }
    const logInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,providerGoogle)

    }
    const logOut=()=>{
        setLoading(true)
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false);
        });
        return ()=>{
            return unsubscribe;
        }
    },[])

    const AuthInfo={
        user,
        loading,
        signUp,
        logOut,
        logInWithEmail,
        signInWithGoogle,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;