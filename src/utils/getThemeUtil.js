import {themes} from "../constants/constants.js";

export const getThemeUtil = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`
    if (Object.values(themes).includes(theme)) return theme
    return themes.light
}