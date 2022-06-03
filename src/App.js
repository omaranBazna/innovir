import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Product from "./Components/Product"
import ContactForm from './Components/ContactForm';
import Logo from './graphics/logo.png'
function App() { 
const [lang,setLang]=useState('En')
  return (
    <div className="App">
     {/*
      <button onClick={()=>{lang=="En"?setLang("Fr"):setLang("En")}} >Change Languge</button>
       <div className={['container',lang].join(' ')}>
 
         { lang=="En"?"HelloWorld":"Hello World in French"
         }
       </div>
        */}
       <nav>
        <img src={Logo} className='logo' />
        <div className="nav-options">
        <a href="#" >about</a>
        <a href="#" >products</a>
        <a href="#" >contact us</a>
        </div>
       </nav>
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
       
        </footer>

    </div>
  );
}

export default App;
