import React from 'react'
import promotions from './../data/promotions.json'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
const NewsPage = () => {
    return <Layout>
        <Container>
            <Row>
                {promotions.map((p, i) => {
                    return <Col md={12} className="mt-3 mb-3">
                        <img src={p.image} className='img-fluid' />
                    </Col>
                })}

            </Row>
        </Container>
    </Layout>
}

export default NewsPage