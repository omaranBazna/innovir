import './App.css';

import Product from "./Components/Product";
import ContactForm from './Components/ContactForm';
import Logo from './graphics/logo.png';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2'; 

import "./i18n/index";
import { LanguageSwitcher } from './Components/LanguageSwitcher';
import { useTranslation }  from 'react-i18next'

function App() { 
  
  const {t, i18n} = useTranslation();
  
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
         <Product />
         <Product />
         <Product />
         <Product />  
       </section>

       <section  id="contact us">
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
