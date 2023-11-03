import '/public/styles/var.css'
import {RoutesApp } from "./routes"
import { useEffect, useState } from 'react'
import { ThemeContext } from '../context/theme/theme_context';

export const App =()=>{
    const [theme,setTheme] = useState('dark-blue');
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            <RoutesApp/>
        </ThemeContext.Provider>
    )
}