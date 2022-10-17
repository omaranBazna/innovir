import {Container, Row, Col} from 'reactstrap'
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import './Footer.css'
const Footer2 = () => {
    return (
        <div>
        <div className='Container'>
            <Row className='d-flex justify-content-evenly  py-3 my-4 border text-muted'>
                <Col className='text-muted text-center'>
                    <span><img src='./logo.png' />
                    <p>© 2022 Innovir Company, Inc. All rights reserved.</p>
                    </span>
                </Col>
                <Col className='text-center'>
                    <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                        <li><a className='nav-link text-muted' href="#"><BsLinkedin size='24px'/></a></li>
                        <li><a className='nav-link text-muted' href="#"><BsFacebook size='24px'/></a></li>
                        <li><a className='nav-link text-muted' href="#"><BsTwitter size='24px'/></a></li>
                    </ul>
                </Col>
            </Row>
        </div>
        </div>
    )
}
export default Footer2;