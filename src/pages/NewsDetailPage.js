import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import { Col, Container, Row } from 'react-bootstrap';
import promotions from './../data/promotions.json'
import { useParams } from 'react-router-dom';
const NewsDetailPage = () => {
    let { slug } = useParams();
    const [news, setNews] = useState("")

    useEffect(() => {
        if (slug) {
            let exist = promotions.find(promo => {

                return promo.slug == slug
            })
            if (exist) {

                setNews(exist)
            }
        }
    }, [slug])
   
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    return (<Layout>
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                    <h4 className='title'>{news.title}</h4>
                    <p>Syarat dan Ketentuan:</p>
                    <ul>
                        {news && news?.syarat.map((syarat, index) => {
                            return <li key={index}>{syarat.ketentuan}</li>
                        })}

                    </ul>
                    <small>*S&K Berlaku</small>
                </Col>
                <Col md={6}>
                    <img src={news.image2} className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </Layout>)
}
export default NewsDetailPage;