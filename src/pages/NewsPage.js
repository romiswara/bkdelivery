import React from 'react'
import promotions from './../data/promotions.json'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const NewsPage = () => {
    const navigate = useNavigate();

    const navigateFunc = (p) => {
        navigate(`/news/${p.slug}`)    
    }

    return <Layout>
        <Container className='mt-2'>
            <Row>
                {promotions.map((p, i) => {
                    return <Col md={12} className="mt-3 mb-3">
                        <img src={p.image} className='img-fluid' onClick={() => navigateFunc(p)} style={{cursor:'pointer'}}/>
                    </Col>
                })}

            </Row>
        </Container>
    </Layout>
}

export default NewsPage