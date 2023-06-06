import React from 'react'
import CheckoutStep1Comp from '../components/CheckoutStep1Comp'
import CheckoutStep2Comp from '../components/CheckoutStep2Comp'
import CheckoutStep3Comp from '../components/CheckoutStep3Comp'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'

const CartPage = () => {
    return <Layout>
        <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    <CheckoutStep1Comp></CheckoutStep1Comp>
                    <CheckoutStep2Comp></CheckoutStep2Comp>
                    <CheckoutStep3Comp></CheckoutStep3Comp>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default CartPage