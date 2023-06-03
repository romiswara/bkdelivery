import React, { useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
const FooterComp = () => {

    const [menus, setMenus] = useState([
        {
            label: "About Us |",
            link: ""
        },
        {
            label: "Kebijakan Privasi|",
            link: ""
        },
        {
            label: "Syarat dan Ketentuan |",
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
                <h4>BURGER KING® DELIVERY</h4>
                <ul className='list'>
                    <li className='list-inline'>
                        1500025
                    </li>
                    <li className='list-inline'>
                        guestservice@burgerking.co.id
                    </li>
                    <li>

                    </li>
                </ul>
                <ul className='list'>
                    {menus.map(menu => {
                        return <li className='footer-menu list-inline'>
                            {menu.label}
                        </li>
                    })}
                </ul>
            </Row>
        </Container>
    </div>
}

export default FooterComp