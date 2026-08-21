import {languages} from "../constants/constants.js";

export const getLangUtil = () => {
    const lang = `${window?.localStorage?.getItem('language')}`
    if (Object.values(languages).includes(lang)) return lang
    return languages.en
}