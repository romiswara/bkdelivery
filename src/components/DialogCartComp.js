import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'
import { useNavigate } from 'react-router-dom'

const DialogCartComp = ({ cart }) => {
    const navigate = useNavigate()
    const [subtotal,setSubTotal] = useState(0)
    const navigateToCart = () => {
        navigate('/cart')
    }
    const countTotalPrice = () => {
        let tempSubtotal = 0
        if(cart){
            for(let a=0;a<cart.length;a++){
                tempSubtotal = tempSubtotal+ (parseInt(cart[a].qty)*(parseInt(cart[a].price)))
            }
            setSubTotal(tempSubtotal)
        }
    }

    useEffect(() => {
        countTotalPrice()
    },[cart])
    return <div style={{ width: '540px', position: 'absolute', zIndex: 3, background: '#fff', padding: '20px', borderRadius: '10px', top: "70px", right: 0 }}>
        {cart && cart.map((c, index) => {
            return <Row key={index}>
                <Col md={2}>
                    <image src={c.image} className='img-fluid' />
                </Col>
                <Col md={6}>
                    <p>{c.name}</p>
                </Col>
                <Col md={1}>
                    {c.qty}
                </Col>
                <Col md={3}>
                    {c.price}
                </Col>
            </Row>
        })}
        <Row>
            <Col md={6}>
                <h5>SUBTOTAL</h5>
            </Col>
            <Col md={6}>
                <h5>{subtotal}</h5>
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