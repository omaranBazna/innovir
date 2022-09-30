import './ContactForm.css';
import React from 'react'
export default function ContactForm(){
   
    return (
        <div className="contact-form">
             <form className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email" />
                 <button >
                     Submit
                 </button>
             </form>
        </div>
    )
}