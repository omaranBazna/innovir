/* eslint-disable no-unused-vars */
import './ContactForm.css';
import React from 'react'
import "../i18n/index";


export default function ContactForm(){

   
    return (
        <div className="contact-form">
           
             <form className="form">
                <input type="text" placeholder="Escreva o seu nome" />
                <input type="text" placeholder="Escreva o seu email" />
                <input type="number" placeholder="Escreva o seu telefone" />
                <textarea placeholder="Algumas Observacoes extra"></textarea>
                <div class="g-recaptcha" data-sitekey="6LeABEYiAAAAAGduKA-csRebQLEJOfi_WMG88zMd"></div>
                <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
                 
             </form>
        </div>
    )
}