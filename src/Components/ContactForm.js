/* eslint-disable no-unused-vars */
import './ContactForm.css';
import React from 'react'
import "../i18n/index";
import { useTranslation }  from 'react-i18next'

export default function ContactForm(){

    const {t} = useTranslation();

    return (
        <div className="contact-form">
           
             <form className="form">
                <input type="text" placeholder={t("name")} />
                <input type="text" placeholder={t("email")} />
                <input type="number" placeholder={t("phone")} />
                <textarea placeholder={t("comments")}></textarea>
                <div class="g-recaptcha" data-sitekey="6LeABEYiAAAAAGduKA-csRebQLEJOfi_WMG88zMd"></div>
                <input type="submit" class="enviar" onclick="Enviar();" value={t("send")} />
                 
             </form>
        </div>
    )
}