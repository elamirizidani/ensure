import { createContext, useContext, useEffect, useState } from "react";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import languages from "@/utilits/languages";

const i18n = new I18n(languages)
i18n.locale = Localization.locale;
i18n.enableFallback = true

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
    const [locale,setLocale] = useState(i18n.locale)


  const changeLocale = locale =>{
    i18n.locale = locale
    setLocale(locale)
  }

    // useEffect(()=>{
    //     console.log(locale)
    // },[locale])

    useEffect(()=>{
        setTimeout(()=>{
            setIsAuthenticated(true)
            // console.log(isAuthenticated)
        },3000)
    },[])



    const login = async (email,password) =>{
        try {
            
        } catch (e) {
            
        }
    }

    const logOut = async () =>{
        try {
            
        } catch (e) {
            
        }
    }

    const registration = async (email,password,username,profileUrl) =>{
        try {
            
        } catch (e) {
            
        }
    }

    return(
        <AuthContext.Provider value={{user,isAuthenticated,login,registration,logOut,locale,changeLocale, i18n}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext)

    if(!value){
        throw new Error("useAuth must be wrapped inside Authantication provider ");
    }

    return value
}