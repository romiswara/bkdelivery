import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'
import { useNavigate } from 'react-router-dom'

const DialogCartComp = ({ cart }) => {
    const navigate = useNavigate()
    const [subtotal, setSubTotal] = useState(0)
    const navigateToCart = () => {
        navigate('/cart')
    }
    const countTotalPrice = () => {
        let tempSubtotal = 0
        if (cart) {
            for (let a = 0; a < cart.length; a++) {
                tempSubtotal = tempSubtotal + (parseInt(cart[a].qty) * (parseInt(cart[a].price)))
            }
            setSubTotal(tempSubtotal)
        }
    }

    useEffect(() => {
        countTotalPrice()
    }, [cart])

    return <>
        {cart && <div style={{ textAlign: 'left', width: '540px', position: 'absolute', zIndex: 3, background: '#fff', padding: '20px', borderRadius: '10px', top: "70px", right: "15%", color: '#333' }}>
            <div style={{ width: '100%', maxHeight: '400px', overflowY: 'scroll', overflowX: 'hidden' }}>
                {cart && cart.map((c, index) => {
                    return <div style={{ display: 'flex', width: '100%', borderBottom: 'solid 1px #ccc', padding: '10px 0px' }}>
                        <div style={{ width: '80px' }}>
                            <img src={c.image} className='img-fluid' />
                        </div>
                        <div style={{ flex: 1 }}>
                            <span>{c.name}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <span> X {c.qty}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            {c.price}
                        </div>
                    </div>
                })}
            </div>
            {subtotal > 0 ? <>
                <div style={{ display: 'flex', marginTop: '20px', textAlign: 'left' }}>
                    <div style={{ flex: 1 }}>
                        <h5>SUBTOTAL</h5>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h5 style={{ textAlign: 'right' }}>{subtotal}</h5>
                    </div>
                </div>
                <div className='mt-4'></div>
                <ButtonComp width="100%" className="button-primary" text="Go To Cart" onClickCB={navigateToCart} />
            </> : <>
                <h4 className='text-center'>No cart available</h4>
            </>}
        </div>}
    </>
}

export default DialogCartComp