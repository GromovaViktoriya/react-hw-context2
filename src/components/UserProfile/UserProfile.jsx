import {useContext} from "react";
import LanguageContext from "../../contexts/languageContext.js";
import {translations} from "../../constants/constants.js";

export const UserProfile = () => {
    const {language} = useContext(LanguageContext);

    return (
        <div>
            <h3 className='profile'>{translations[language].profile}</h3>
        </div>
    )
}