import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'

const DialogCartComp = () => {

    const navigateToCart = () => {
        alert("sdfsdf")
    }

    return <div style={{ width: '540px',position:'absolute',zIndex:3,background:'#fff',padding:'20px',borderRadius:'10px',top:"70px",right:0 }}>
        {/* https://bkdelivery.co.id/static/website/img/BK_loading_2.e37135cc9952.gif */}
        <Row>
            <Col md={2}>
                <image src="" className='img-fluid'/>
            </Col>
            <Col md={6}>
               <p>sdfjkasjdfk sadkfjksadfj ksdfa jk</p>
            </Col>
            <Col md={1}>
                x 1
            </Col>
            <Col md={3}>
                12088
            </Col>
        </Row>
        <Row>
            <Col md={2}>
                <image src="" className='img-fluid'/>
            </Col>
            <Col md={6}>
               <p>sdfjkasjdfk sadkfjksadfj ksdfa jk</p>
            </Col>
            <Col md={1}>
                x 1
            </Col>
            <Col md={3}>
                12088
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <h5>SUBTOTAL</h5>
            </Col>
            <Col md={6}>
                <h5>150000</h5>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <ButtonComp width="100%" className="button-primary" text="Go To Cart" onClickCB={navigateToCart} />
            </Col>
        </Row>
    </div>
}

export default DialogCartComp