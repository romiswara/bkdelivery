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
    console.log("promotions", promotions)
    useEffect(() => {
        console.log("news",news)
    },[news])
    return (<Layout>
        <Container>
            <Row>
                <Col md={6}>
                    <h2>{news.title}</h2>
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