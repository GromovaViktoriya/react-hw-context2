import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {UserProfile} from "./components/UserProfile/UserProfile.jsx";
import {useEffect, useState} from "react";
import {languages, themes} from "./constants/constants.js";
import LanguageContext from "./contexts/languageContext.js";
import ThemeContext from "./contexts/themeContext.js";
import {getThemeUtil} from "./utils/getThemeUtil.js";
import {getLangUtil} from "./utils/getLangUtil.js";


function App() {
    const [language, setLanguage] = useState(getLangUtil);
    const [theme, setTheme] = useState(getThemeUtil);

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
        localStorage.setItem('language', language)
    }, [theme, language])

    const toggleLanguage = () => {
        const languageArr = Object.values(languages)
        const currentIndex = languageArr.indexOf(language)
        const nextIndex = (currentIndex + 1)%languageArr.length
        setLanguage(languageArr[nextIndex])
    }
    const toggleTheme = () => {
        theme === 'light' ? setTheme(themes.dark) : setTheme(themes.light);
    }

    return (
        <div className="App">
            <LanguageContext.Provider value={{language, toggleLanguage}}>
                <ThemeContext.Provider value={{theme, toggleTheme}}>
                    <Header/>
                    <UserProfile/>
                </ThemeContext.Provider>
            </LanguageContext.Provider>
        </div>
    )
}

export default App
