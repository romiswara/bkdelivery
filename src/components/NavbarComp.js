import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavbarComp = () => {
    return <div className='navbar'>
        <Container>
            <Row>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '90px' }}>
                        <img src="./../assets/logo.png" alt="logo" className='logo' />
                    </div>
                    <div style={{ flex: 1 }}>
                        <ul className='list'>
                            <li className='list-inline'>
                                <ul>
                                    <li style={{ fontSize: '14px', listStyle: 'none' }}>Delivery</li>
                                    <li style={{ fontSize: '24px', listStyle: 'none', fontWeight: 'bold' }}>Order</li>
                                </ul>
                            </li>
                            <li className='list-inline'>
                                <ul>
                                    <li style={{ fontSize: '14px', listStyle: 'none' }}>Get Fresh</li>
                                    <li style={{ fontSize: '24px', listStyle: 'none', fontWeight: 'bold' }}>Promotions</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div style={{ width: '200px' }}>
                        <ul className='list'>
                            <li className='list-inline'>
                                <ul>
                                    <li style={{ fontSize: '24px', listStyle: 'none', fontWeight: 'bold' ,marginRight:'40px'}}>Login</li>
                                </ul>
                            </li>
                            <li className='list-inline'>
                                cart
                            </li>
                        </ul>
                    </div>
                </div>

            </Row>
        </Container>
    </div>
}

export default NavbarComp