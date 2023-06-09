import React, { useEffect, useState } from 'react'
import CarouselComp from '../components/CarouselComp'
import { Container, Row, Col } from 'react-bootstrap'
import ProductComp from '../components/ProductComp'
import product from './../data/product.json'
import Layout from '../Layout'
import './../App.css';
const HomePage = () => {
    const [productList, setProductList] = useState(product)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (<Layout>
        <CarouselComp></CarouselComp>
        <div className='bgwrapper'>
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className='text-center title mt-5 mb-4'>Our Menus</h3>
                </Col>
            </Row>
            <Row>
                {productList.map(p => {
                    return <Col md={4} sm={6} xs={6}><ProductComp data={p} showButton={true} path="menus"></ProductComp> </Col>
                })}
            </Row>
        </Container>
        </div>

    </Layout>
    )
}

export default HomePage