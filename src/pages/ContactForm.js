// import React from 'react';


// <script src="https://www.google.com/recaptcha/api.js"></script>

// export default function ContactForm(){  
//     return (
//     <>
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <form className="contact-form">
        <form className="row g-3">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Nome</label>
                <input type="text" class="form-control" />
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Sobrenome</label>
                <input type="text" class="form-control" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            
            <div className="col-12">
                <label for="inputAddress" className="form-label">Endereço</label>
                <input type="text" className="form-control" id="inputAddress"  />
            </div>  
            <div className="col-md-6">
                <label for="inputCity" className="form-label">Cidade</label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label" > Estado </label><br/>
                <select id="inputState" className="form-select" >
                    <option selected> Escolha...</option>
                    <option>...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="inputNumber" className="form-label">Telefone</label>
                <input type="text" placeholder="(XX) (999999909)"  />
            </div>
             
           
            
            <div className="col-md-12">
                <ReCAPTCHA
                    sitekey="6LfPH_whAAAAAKbSeK1Ve8ZkNOVq2wAmjTpRSpm7"
                    onChange={onChange}
                    />

                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={!verfied}
                >
                    Enviar
                </button>
            </div>
        </form>
    </form>
            
    );
};
        
export default ContactForm;
        
 {/* <div className="col-md-12">
                 <form action="#" method="POST"> 
                    <div className="form-group">
                        <div className="g-reCAPTCHA" data-sitekey="6LfPH_whAAAAAKbSeK1Ve8ZkNOVq2wAmjTpRSpm7"></div>
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                            <label><input type="checkbox" id="check_rules" name="check_rules" required /> <br/>Por favor, marque a caixa!</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" id="submit" name="submit" value="Enviar" className="btn-btn-success"/>
                    </div>
                </form> 
                
            </div> */}