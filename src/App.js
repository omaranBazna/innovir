import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
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
        <img src="" className='logo' />
        <a href="#" ></a>
        <a href="#" ></a>
        <a href="#" ></a>
       </nav>
       <section  id="about">

      </section>

      <section  id="products" >
         
       </section>

       <section  id="contact us">
         
       </section>
       
        <footer>

        </footer>

    </div>
  );
}

export default App;
