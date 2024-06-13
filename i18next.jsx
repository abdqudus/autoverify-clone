import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./Translation/English.json";
import Polish from "./Translation/Polish.json";

const resources = {
    en: {
        translation: English,
    },
    pl: {
        translation: Polish,
    },
}

i18next.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('i18nextLng') || 'en',
    });

export default i18next;