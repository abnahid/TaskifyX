
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const userInfo = {
                    userId: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                };

                try {
                    await axios.post("http://localhost:5000/users", userInfo, {
                        headers: { "Content-Type": "application/json" }
                    });
                    console.log("User saved successfully!");
                    Navigate("/");
                } catch (err) {
                    if (err.response && err.response.status === 409) {
                        console.warn("User already exists. No need to add again.");
                    } else {
                        console.error("Error saving user:", err);
                    }
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        signOutUser,
        loading,
        user,
        auth,
        setUser,
        updateUserProfile,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};



export default AuthProvider;