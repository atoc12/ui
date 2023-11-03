import { createContext, useContext } from "react";
export const ThemeContext = createContext();
export const useTheme =()=>{
    const {theme,setTheme} = useContext(ThemeContext);
    return{theme,setTheme};
}