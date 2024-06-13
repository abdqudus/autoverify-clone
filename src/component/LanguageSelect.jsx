import { useLanguageContext } from "../contexts/languageContext";

const LanguageSelect = () => {
    const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();
    console.log(currentLanguage)
    return (
        <select
            className="  sm:flex hidden justify-between gap-6 items-center"
            onChange={onClickLanguageChange}
            value={currentLanguage}
        >
            {
                Object.keys(languages).map((lng) => (
                    <option key={languages[lng].nativeName} value={lng}>
                        {languages[lng].nativeName}
                    </option>
                ))
            }
        </select >
    );
};

export default LanguageSelect;