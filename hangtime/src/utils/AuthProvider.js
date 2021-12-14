import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                currentUser,
            }}
        ></AuthContext.Provider>
    );
};

export default AuthProvider;