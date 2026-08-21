import {createContext} from "react";
import {themes} from "../constants/constants.js";


const themeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {
    },
});

export default themeContext;