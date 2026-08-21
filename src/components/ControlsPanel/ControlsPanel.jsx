import {useContext} from "react";
import ThemeContext from "../../contexts/themeContext.js";
import LanguageContext from "../../contexts/languageContext.js";
import {translations} from "../../constants/constants.js";

export const ControlsPanel = () => {
    const {language,toggleLanguage} = useContext(LanguageContext);
    const {toggleTheme} = useContext(ThemeContext);


    const toggleLanguageHandler = () => {
        toggleLanguage()
    }

    const toggleThemeHandler = () => {
        toggleTheme()
    }
    return (
        <div className="controls">
            <button onClick={toggleLanguageHandler}>{translations[language].changeLanguage}</button>
            <button onClick={toggleThemeHandler}>{translations[language].changeTheme}</button>
        </div>
    )
}