import React from 'react'
import Layout from '../Layout'
import { Col, Row, Container } from 'react-bootstrap'
import SearchComp from '../components/SearchComp'
import MenuComp from '../components/MenuComp'
import product from './../data/product.json'
const MenusPage = () => {
    return <Layout>
        <Container>
            <Row>
                <Col md={2} sm={12}>
                    <SearchComp />
                    {product.map((data,index) => {
                        return  <MenuComp key={index} data={data}/>
                    })}
                   
                    <small>* Harga belum termasuk pajak</small>
                </Col>
                <Col md={10} sm={12}>
                    sdfsdf
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default MenusPage