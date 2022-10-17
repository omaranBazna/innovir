import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    
      <form>
        
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
      </form>
   
  );
};

export default ReCaptach;




{/* <div className="mb-3" style={{ width: 500 }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div> */}