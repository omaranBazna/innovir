import './ContactForm.css';
import React from 'react'
import "../i18n/index";
import { useTranslation }  from 'react-i18next'


export default function ContactForm(){

    const {t, i18n} = useTranslation();
   
    return (
        <div className="contact-form">
             <form className="form">
                <input type="text" placeholder={t("name")} />
                <input type="text" placeholder={t("email")} />
                 <button >
                     {t("submit")}
                 </button>
             </form>
        </div>
    )
}