import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Product from "./pages/Product";
import About from "./pages/About";
// import Index from "./pages/Index"
import ContactForm from './pages/ContactForm';
import Logo from './graphics/logo.png'
import Footer from './Components/Footer'
import Footer2 from './Components/Footer2'


function App() { 
const [lang,setLang]=useState('pt-br')

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
          <a href="#" ></a>
          <a href="/About" className="menu-btn">About</a>
          <a href="/product.js" className="menu-btn" >products</a>
          <a href="/ContactForm.js" >Contato</a>
          <a href="/Index.js" className="menu-btn">indexus</a>
        </div>
       </nav>
        <div  className="About">
          <About />
        </div>

       <div  className="products" >
         <Product /> 
         {/* <Index /> */}
         <Product />
         <Product />
         <Product />

       </div>

       {/* <section id="IndexUs">
        <Index/>
       </section> */}



       <div className="contact us">
         <ContactForm />
       </div>
  
       <footer>
        <h1 className='text-dark'>Footer 1</h1>
          <Footer />
        
        
          {/* <h1 className='text-dark'>Footer 2</h1>
          <Footer2 /> */}
       
       </footer>

    </div>
  );
}

export default App;