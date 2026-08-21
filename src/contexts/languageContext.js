import {createContext} from "react";
import {languages} from "../constants/constants.js";

const languageContext = createContext({
    language: languages.en,
    toggleLanguage: (lang) => {},
});
export default languageContext;