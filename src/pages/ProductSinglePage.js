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
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/actions/cartAction'
const ProductSinglePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    let { slug } = useParams();
    const [qty,setQty] = useState(1)
    const [listProduct, setListProduct] = useState([])
    const [selectedVariant,setSelectedVariant] = useState({})
    const findProduct = (slug) => {
        let selectedProduct = product.find(p => {
            if(p.variant){
                return p.variant.find((variant,index) => {
                    var slugReplace = slug.replace(/-/g, ' ');
                    if(variant.name == slugReplace){
                        return variant
                    }
                     
                })
            }
        })
        let selectedV = selectedProduct.variant.find(v => {
            var slugReplace = slug.replace(/-/g, ' ');
            return v.name == slugReplace
        })
        setSelectedVariant(selectedV)
      
    }

    useEffect(() => {
      
        findProduct(slug)
    }, [slug])

    const navigateMenuFunc = (data) => {
        setListProduct([])
        navigate(`/menus/${data.slug}`);
    }


    const addToCartFunc = () => {
        console.log("selectedVariant",selectedVariant)
        dispatch(addCart({
            name:selectedVariant.name,
            price:selectedVariant.price,
            image:selectedVariant.image,
            qty:qty
        }))
    }

    const changeTotal = (value) => {
        setQty(value)
    }

    return <Layout>
        <Container className='mt-5'>
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
                            <h2>{selectedVariant.name}</h2>
                            <img src={selectedVariant.image} className='img-fluid' />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3>{selectedVariant.price}</h3>
                            <CounterComp totalCB={changeTotal}></CounterComp>
                           <div className='mt-4'>
                           <ButtonComp className="button-primary" width="100%" text="Add To Cart" onClickCB={() => addToCartFunc()} />
                           </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default ProductSinglePage