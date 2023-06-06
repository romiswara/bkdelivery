import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CounterComp from './CounterComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonComp from './global/ButtonComp'
import { deleteCart, updateCart } from '../redux/actions/cartAction'
import { useNavigate } from 'react-router-dom'

const CheckoutStep1Comp = () => {
    const [subTotal, setSubTotal] = useState(0)
    const navigation = useNavigate()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const totalCB = (total, variants) => {
        let payload = {
            name: variants.name,
            qty: total
        }
        dispatch(updateCart(payload))
    }

    const navigateToLoginFunc = () => {
        navigation('/accounts/login')
    }

    const continueAsGuestFunc = () => {

    }

    const deleteCartFunc = (c) => {
        console.log("caaa", c)
        dispatch(deleteCart(c.name))
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

    const continueShoppingFunc = () => {
        navigation('/menus')
    }

    return (
        <>
            <div className='card' style={{padding:'20px 25px'}}>
                <Row>
                    <Col md={8}>
                        <div className=' mb-5' style={{ padding: '10px' }}>
                            <Table className='table'>
                                <tr style={{ borderBottom: 'dashed 1px #ccc', height: '30px' }}>
                                    <td className='regularfont' style={{ fontSize: '14px' }}>Menu item</td>
                                    <td className='regularfont' style={{ fontSize: '14px' }}>Quantity</td>
                                    <td className='regularfont' style={{ fontSize: '14px' }}>Subtotal</td>
                                </tr>
                                {cart && cart.map((c, index) => {
                                    return <tr style={{ borderBottom: 'solid 1px #f5f5f5', padding: '20px 10px' }} >
                                        <td>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: '50px' }}>
                                                    <img src={c.image} width="50px" />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <p>{c.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <div style={{ marginTop: '-4px' }}>
                                                <CounterComp value={c.qty} totalCB={(total) => totalCB(total, c)}></CounterComp>
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ flex: 1 }}>
                                                    <p>
                                                        {parseInt(c.price) * parseInt(c.qty)}
                                                    </p>
                                                </div>
                                                <div style={{ width: '30px' }}>
                                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteCartFunc(c)} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })}

                            </Table>
                            <h6 style={{cursor:'pointer'}} className='regularfont teks-primary' onClick={() => continueShoppingFunc()}>Continue Shopping</h6>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h6 className='regularfont'>Order Subtotal*</h6>
                        <h3 className='regularfont'>{subTotal}</h3>
                        <div className='mb-2'>
                            <small className='regularfont' style={{ fontSize: '12px', color: '#333' }}>
                                *Price might change due to your delivery location.
                            </small>
                        </div>
                        <br></br>
                        <ButtonComp width="100%" className="button-primary" text="Login To Order" onClickCB={navigateToLoginFunc} />
                        <div className='mt-4'>
                            <ButtonComp width="100%" className="button-primary" text="Continue as Guest" onClickCB={continueAsGuestFunc} />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CheckoutStep1Comp