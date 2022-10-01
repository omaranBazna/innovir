import en from '../assets/usa.svg'
import fr from '../assets/france.svg'
import { useTranslation }  from 'react-i18next'
import './LanguageSwitcher.css'
const LanguageOptions = [
    {
        name: "Enghish",
        value: "en",
        flag: en
    },
    {
        name: "Français",
        value: "fr",
        flag: fr
    }
]

export const LanguageSwitcher = () =>{

    const { t, i18n } = useTranslation();

    return(
        <div className="languageSwitcher">
            <span className="selectLanguage">{t("selectLanguage")}: </span>

            {LanguageOptions.map(LanguageOption =>(
                <div className="buttonLanguage">
                    <button
                        className="button"
                        key={LanguageOption.value}
                        onClick={() => {
                            i18n.changeLanguage(LanguageOption.value)
                        }}
                    >
                        <img className="imgLanguage" src={LanguageOption.flag} alt={LanguageOption.name}/>
                        <span>{LanguageOption.name}</span>
                    </button>
                </div>
            ))

            }
        </div>
    )
}