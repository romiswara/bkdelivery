import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Col, Row, Container } from 'react-bootstrap'
import SearchComp from '../components/SearchComp'
import MenuComp from '../components/MenuComp'
import product from './../data/product.json'
import { useParams, useNavigate } from 'react-router-dom'
import ProductComp from '../components/ProductComp'
import ButtonComp from '../components/global/ButtonComp'
import CounterComp from '../components/CounterComp'
const ProductSinglePage = () => {
    const navigate = useNavigate();
    let { slug } = useParams();
    const [listProduct, setListProduct] = useState([])
    const findProduct = (slug) => {
        let selectedProduct = product.find(p => {
            return p.slug == slug
        })
        if (selectedProduct.variant) {
            setListProduct(selectedProduct.variant)
        }
    }

    useEffect(() => {
        if (!slug) {
            slug = "kings-chicken-rasa-baru"
        }
        findProduct(slug)
    }, [slug])

    const navigateMenuFunc = (data) => {
        setListProduct([])
        navigate(`/menus/${data.slug}`);
    }


    const addToCartFunc = () => {
        alert("add")
    }

    return <Layout>
        <Container>
            <Row>
                <Col md={3} sm={12}>
                    <SearchComp />
                    {product.map((data, index) => {
                        return <MenuComp key={index} data={data} clickMenuCB={navigateMenuFunc} />
                    })}
                    <small>* Harga belum termasuk pajak</small>
                </Col>
                <Col md={9} sm={12}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <h2>App Exc BBQ Beef Rasher</h2>
                            <img src="https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/9xl3ak2puc6xgzx3teshaa_product_details.jpg" className='img-fluid' />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3>Rp. 23,182</h3>
                            <CounterComp></CounterComp>
                            <ButtonComp className="button-primary" width="100%" text="Add To Cart" onClickCB={() => addToCartFunc()} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default ProductSinglePage