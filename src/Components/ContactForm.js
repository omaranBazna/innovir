import React from 'react'
export default function ContactForm(){
   
    return (

        <div className="contact-form">
             <form >
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email" />
                 <button >
                     Submit
                 </button>
       

             </form>

        </div>
    )
}