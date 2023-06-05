import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
const FooterComp = () => {

    const [menus, setMenus] = useState([
        {
            label: "About Us",
            link: ""
        },
        {
            label: "Kebijakan Privasi",
            link: ""
        },
        {
            label: "Syarat dan Ketentuan",
            link: ""
        },
        {
            label: "TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.",
            link: ""
        }
    ])
    return <div className='footer'>
        <Container>
            <Row>
                <h4 className='footer__logo'>BURGER KING® DELIVERY</h4>
          
                <div style={{ display: 'flex' }}>
                   <div style={{flex:1}}>
                   <FontAwesomeIcon icon={faPhone} />
                        1500025
                   </div>
                   <div style={{flex:1}}>
                   <FontAwesomeIcon icon={faEnvelope} /> guestservice@burgerking.co.id
                   </div>
                   <div style={{flex:1}}>
                   <a style={{ marginLeft: '7px' }}> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a style={{ marginLeft: '7px' }}><FontAwesomeIcon icon={faInstagram} /></a>
                        <a style={{ marginLeft: '7px' }}> <FontAwesomeIcon icon={faTwitter} /></a>
                        <a style={{ marginLeft: '7px' }}><FontAwesomeIcon icon={faYoutube} /></a>
                   </div>
                </div>
                <div style={{ display: 'flex' }}>
                    {menus.map(menu => {
                        return <div style={{ flex: 1 }}>{menu.label}</div>
                    })}
                </div>
             
            </Row>
        </Container>
    </div>
}

export default FooterComp