import { createContext,useState,useContext } from "react";

const UserContext =createContext(undefined);

export const UserProvider = ({children}) => {
    const [logIn,setLogIn]=useState(false)
    return<UserContext.Provider value={{logIn,signIn: ()=>setLogIn(true),signOut: ()=>setLogIn(false)}}>{children}</UserContext.Provider>
}

export const useUser=()=> useContext(UserContext);