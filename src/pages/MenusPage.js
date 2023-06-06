import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Col, Row, Container } from 'react-bootstrap'
import SearchComp from '../components/SearchComp'
import MenuComp from '../components/MenuComp'
import product from './../data/product.json'
import { useParams , useNavigate} from 'react-router-dom'
import ProductComp from '../components/ProductComp'
const MenusPage = () => {
    const navigate = useNavigate();
    let { slug } = useParams();
    const [listProduct, setListProduct] = useState([])
    const findProduct = (slug) => {
        let selectedProduct = product.find(p => {
            return p.slug == slug
        })
        if (selectedProduct.variant) {
            selectedProduct.variant.slug = selectedProduct.slug
            setListProduct(selectedProduct.variant)
        }
    }

    useEffect(() => {
       if(!slug){
            slug ="kings-chicken-rasa-baru"
       }
        findProduct(slug)
    }, [slug])

    const navigateMenuFunc = (data) => {
        setListProduct([])
        navigate(`/menus/${data.slug}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    return <Layout>
        <Container className='pt-5'>
            <Row>
                <Col md={3} sm={12}>
                    <SearchComp />
                    {product.map((data, index) => {
                        return <MenuComp key={index} data={data} clickMenuCB={navigateMenuFunc} />
                })}
                    <small>* Harga belum termasuk pajak</small>
                </Col>
                <Col md={9} sm={12}>
                   <Row>
                   {listProduct.map((product, index) => {
                        return <Col md={6} sm={6} xs={6}>
                            <ProductComp data={product} showButton={false} path="products"></ProductComp>
                        </Col>
                    })}
                   </Row>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default MenusPage