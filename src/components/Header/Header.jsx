import {ControlsPanel} from "../ControlsPanel/ControlsPanel.jsx";
import {useContext} from "react";
import LanguageContext from "../../contexts/languageContext.js";
import {translations} from "../../constants/constants.js";


export const Header = () => {
    const {language} = useContext(LanguageContext);

    return (
        <header className="header">
            <h1 className='title'>{translations[language].welcome}</h1>
            <ControlsPanel/>
        </header>
    )
}