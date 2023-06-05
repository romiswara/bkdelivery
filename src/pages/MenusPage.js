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
    const { slug } = useParams();
    const [listProduct, setListProduct] = useState([])
    const findProduct = (slug) => {
        let selectedProduct = product.find(p => {
            return p.slug == slug
        })
        if (selectedProduct.variant) {
            setListProduct(selectedProduct.variant)
            console.log("selectedProduct", selectedProduct)
        }
    }

    useEffect(() => {
        console.log("slug", slug)
        findProduct(slug)
    }, [slug])

    const navigateMenuFunc = (data) => {
        console.log("data",data)
        setListProduct([])
        navigate(`/menus/${data.slug}`);
    }


    return <Layout>
        <Container>
            <Row>
                <Col md={2} sm={12}>
                    <SearchComp />
                    {product.map((data, index) => {
                        return <MenuComp key={index} data={data} clickMenuCB={navigateMenuFunc} />
                    })}

                    <small>* Harga belum termasuk pajak</small>
                </Col>
                <Col md={10} sm={12}>
                    {listProduct.map((product, index) => {
                        return <ProductComp data={product}></ProductComp>
                    })}


                </Col>
            </Row>
        </Container>
    </Layout>
}

export default MenusPage