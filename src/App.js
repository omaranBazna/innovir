import './App.css';

import "./i18n/index";
import { LanguageSwitcher } from './Components/LanguageSwitcher';
import { useTranslation }  from 'react-i18next'

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {ProductFour, ProductThree, ProductTwo } from "./Components/Product"
import ContactForm from './Components/ContactForm';
import Logo from './graphics/logo.png'
import Footer from './Components/Footer'
import Footer2 from './Components/Footer2'
import ProductOne from './Components/Product';
function App() { 
  
  const {t} = useTranslation();
  
  return (
    <div className="App">
       <nav>
        <img src={Logo} className='logo' alt="logo"/>
        <div className="nav-options">
          <a href="#" >{t("about")}</a>
          <a href="#" >{t("product")}</a>
          <a href="#" >{t("contactUs")}</a>
        </div>
       </nav>
       <LanguageSwitcher/>
       
       <section  id="about">
       </section>

       <section  id="products" >
         <ProductThree />
         <ProductFour />  
         <ProductThree />
         <ProductFour /> 

       </section>

       <section  id="contact us">
       <h1 className='text-dark'><center>{t("form")}</center></h1>
         <ContactForm />
       </section>
       
       <footer>
       <h1 className='text-dark'>{t("footer")} 1</h1>
         <Footer />
       
         <h1 className='text-dark'>{t("footer")} 2</h1>
         <Footer2 />
       
        </footer>

    </div>
  );
}

export default App;
