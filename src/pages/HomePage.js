import React, { useState } from 'react'
import CarouselComp from '../components/CarouselComp'
import { Container, Row, Col } from 'react-bootstrap'
import ProductComp from '../components/ProductComp'
import product from './../data/product.json'
import Layout from '../Layout'
const HomePage = () => {
    const [productList, setProductList] = useState(product)
    return (<Layout>

        <CarouselComp></CarouselComp>
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className='text-center'>Our Menus</h3>
                </Col>
            </Row>
            <Row>
                {productList.map(p => {
                    return <Col md={4}><ProductComp data={p}></ProductComp> </Col>
                })}
            </Row>
        </Container>

    </Layout>
    )
}

export default HomePage