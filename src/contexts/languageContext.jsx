import React, {
    createContext,
    useContext,
    useState,
} from "react";
import { useTranslation } from "react-i18next";


export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
    const languages = {
        en: { nativeName: "English" },
        pl: { nativeName: "Polski" },
    };
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('i18nextLng'));
    const { t, i18n } = useTranslation();

    const onClickLanguageChange = (e) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language);
        setCurrentLanguage(language)
        //change the language
    };

    return (
        <LanguageContext.Provider
            value={{ t, i18n, currentLanguage, onClickLanguageChange, languages }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => useContext(LanguageContext);