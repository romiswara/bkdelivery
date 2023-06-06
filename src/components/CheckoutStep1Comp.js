import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CounterComp from './CounterComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonComp from './global/ButtonComp'
import { deleteCart } from '../redux/actions/cartAction'

const CheckoutStep1Comp = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const totalCB = (total, index) => {

    }

    const navigateToLoginFunc = () => {

    }

    const continueAsGuestFunc = () => {

    }

    const deleteCartFunc = (c) => {
        console.log("caaa",c)
        dispatch(deleteCart(c.name))
    }

    return (
        <>
            <Row>
                <Col md={8}>
                 <div className='card' style={{padding:'10px'}}>
                 <Table className='table'>
                        <tr>
                            <td>Menu item</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                        {cart && cart.map((c, index) => {
                            return <tr>
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '30px' }}>
                                            <img src={c.image} width="30px" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p>{c.title}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <CounterComp totalCB={(total) => totalCB(total, index)}></CounterComp>
                                </td>
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ flex: 1 }}>
                                            <p>
                                                {parseInt(c.price) * parseInt(c.qty)}
                                            </p>
                                        </div>
                                        <div style={{ width: '30px' }}>
                                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteCartFunc(c)}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}

                    </Table>
                 </div>
                </Col>
                <Col md={4}>
                    <p>Order Subtotal*</p>
                    <small>
                        *Price might change due to your delivery location.
                    </small>
                    <br></br>
                    <ButtonComp width="100%" className="button-primary" text="Login To Order" onClickCB={navigateToLoginFunc}/>
                    <div className='mt-4'>
                    <ButtonComp width="100%" className="button-primary" text="Continue as Guest" onClickCB={continueAsGuestFunc}/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CheckoutStep1Comp