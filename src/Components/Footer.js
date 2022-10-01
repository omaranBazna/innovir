import {Container, Row, Col} from 'reactstrap'
import Logo from '../graphics/logo.png'
import './Footer.css'

import "../i18n/index";
import { useTranslation }  from 'react-i18next'

const Footer = () => {
  
  const {t, i18n} = useTranslation();

    return (
      <div>
      <div className='Container '>
    
        <Row className='row-cols-1 text-center fow-cols-sm-2 row-cols-md-5 py-5 my-5 d-flex justify-content-center boarder-top'>
            <Col className='mb-3 p-3'>
              <ul className="container-image">  
                <img className="image" src={Logo}/>
                <p className='text-muted'>@ 2022</p>        
              </ul>
            </Col>

            <Col className='mb-3 p-3 text-muted'>
              <h5>{t("services")}</h5>
              <ul className='nav flex-column'>
              <li><a className='nav-link p-0 text-muted p-1' href="#">{t("writing")}</a></li>
              <li><a className='nav-link p-0 text-muted p-1' href="#">{t("internships")}</a></li>
              <li><a className='nav-link p-0 text-muted p-1' href="#">{t("coding")}</a></li>
              <li><a className='nav-link p-0 text-muted py-1' href="#">{t("teaching")}</a></li>
              </ul>
            </Col>
            <Col className='mb-3 p-3 text-muted'>
              <h5>{t("contactUs")}</h5>
              <ul className='nav flex-column'>
              <li><a className='nav-link text-muted p-1' href="#">Uttar Pradesh</a></li>
              <li><a className='nav-link text-muted p-1' href="#">Ahemdabad</a></li>
              <li><a className='nav-link text-muted p-1' href="#">Indore</a></li>
              <li><a className='nav-link text-muted p-1' href="#">Mumbai</a></li>
              </ul>
            </Col>
            <Col className='mb-3 p-3 text-muted'>
              <h5>{t("socialMedia")}</h5>
              <ul className='nav flex-column'>
              <li><a className='nav-link text-muted p-2' href="#">
                <span >Facebook</span>
              </a></li>
              <li><a className='nav-link text-muted p-2' href="#">               
                  <span>Instagram</span>            
              </a></li>
              <li><a className='nav-link text-muted p-2' href="#">               
                  <span >Twitter</span>               
              </a></li>
              <li><a className='nav-link text-muted p-2' href="#">               
                  <span>Youtube</span>              
              </a></li>
              </ul>
            </Col>
            </Row>          
        </div>
        <div className="Block d-flex justify-content-center align-items-center">

<div className='p-2 text-muted'><p>{t("copy")}</p></div>
</div>
 
       
        </div>

    
    )
  }
  export default Footer;