import { useLanguageContext } from "../contexts/languageContext";

const LanguageSelect = () => {
    const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext();
    console.log(currentLanguage)
    return (
        <div className="border border-blue-500 rounded-[10px]  px-2">

            <select
                className=" outline-none flex bg-transparent justify-between gap-6 items-center"
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
        </div>
    );
};

export default LanguageSelect;