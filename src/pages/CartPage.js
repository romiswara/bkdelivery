import React from 'react'
import CheckoutStep1Comp from '../components/CheckoutStep1Comp'
import CheckoutStep2Comp from '../components/CheckoutStep2Comp'
import CheckoutStep3Comp from '../components/CheckoutStep3Comp'
import Layout from '../Layout'

const CartPage = () => {
    return <Layout>
        <CheckoutStep1Comp></CheckoutStep1Comp>
        <CheckoutStep2Comp></CheckoutStep2Comp>
        <CheckoutStep3Comp></CheckoutStep3Comp>
    </Layout>
}

export default CartPage