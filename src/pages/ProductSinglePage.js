import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Col, Row, Container } from 'react-bootstrap'
import SearchComp from '../components/SearchComp'
import MenuComp from '../components/MenuComp'
import product from './../data/product.json'
import { useParams, useNavigate } from 'react-router-dom'
import ButtonComp from '../components/global/ButtonComp'
import CounterComp from '../components/CounterComp'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/actions/cartAction'
import MessageComp from '../components/MessageComp'
const ProductSinglePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart)

    let { slug } = useParams();
    const [qty, setQty] = useState(1)
    const [message, setMessage] = useState({
        show: true,
        message: "",
        background: ''
    })
    const [selectedVariant, setSelectedVariant] = useState({})
    const findProduct = (slug) => {
        let selectedProduct = product.find(p => {
            if (p.variant) {
                return p.variant.find((variant, index) => {
                    var slugReplace = slug.replace(/-/g, ' ');
                    if (variant.name == slugReplace) {
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
        navigate(`/menus/${data.slug}`);
    }


    const addItemToCart = () => {
        dispatch(addCart({
            name: selectedVariant.name,
            price: selectedVariant.price,
            image: selectedVariant.image,
            qty: qty
        }))
        window.scrollTo(0, 0);
        setTimeout(() => {
            setMessage({
                message: "Product added to cart",
                show: true,
                background: 'green'
            })
            setTimeout(() => {
                setMessage({
                    show: false,
                    message: "",
                    background: ""
                })
            }, 1000)
        }, 100)
    }

    const addToCartFunc = () => {
        if (cart == null) {
            addItemToCart()
        } else {
            if (cart) {
                let exist = cart.find(c => {
                    return c.name == selectedVariant.name
                })
                if (exist) {
                    setMessage({
                        show: true,
                        message: "Product already in cart",
                        background: "red"
                    })
                } else {
                    addItemToCart()
                }
            }
        }
    }

    const changeTotal = (value) => {
        setQty(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return <Layout>
        {message.show && <MessageComp message={message.message} background={message.background}></MessageComp>}
        <Container className='mt-5'>
            <Row>
                <Col md={3} sm={12}>
                    <SearchComp />
                    {product.map((data, index) => {
                        return <MenuComp key={index} data={data} clickMenuCB={navigateMenuFunc} active=""/>
                    })}
                  <div className='mb-5'>
                    <small>* Harga belum termasuk pajak</small>
                  </div>
                </Col>
                <Col md={9} sm={12}>
                    <div className='card' style={{ padding: '20px' }}>
                        <Row>
                            <Col md={8} sm={12} xs={12}>
                                <h2 className='title-reg'>{selectedVariant.name}</h2>
                                <img src={selectedVariant.image} className='img-fluid mb-3' />
                            </Col>
                            <Col md={4} sm={12} xs={12}>
                                <h3 className='regularfont'>{selectedVariant.price}</h3>
                                <CounterComp value={qty} totalCB={changeTotal}></CounterComp>
                                <div className='mt-4'>
                                    <ButtonComp className="button-primary" width="100%" text="Add To Cart" onClickCB={() => addToCartFunc()} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default ProductSinglePage