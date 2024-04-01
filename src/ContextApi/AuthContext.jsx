import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {URL} from "../Utils/Url";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        getCurrentUser()        
    }, [])

    const getCurrentUser = async () => {
        try{
            const response = await axios.get(URL+"api/user/currentloggeduser", {withCredentials:true})
            setCurrentUser(response.data);
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}