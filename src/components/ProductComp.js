import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'
import { useNavigate } from 'react-router-dom'

const ProductComp = ({ data }) => {
    const navigate = useNavigate();
    const onClickFunc = (path) => {
      
        navigate(`/menus/${path}`)
    }
    return <div className='menu-box'>
        <div className='mb-3'>
            <img src={data.image} className='img-fluid' />
        </div>
        <Row>
            <Col md={6}>
                <h5 style={{ textAlign: 'left' }}>{data.name}</h5>
                {data.price != undefined && <h5 style={{ textAlign: 'left' }}>{data.price}</h5>}
            </Col>
            <Col md={6}>
                <ButtonComp width="100%" className="button-primary" text="Order" onClickCB={() => onClickFunc(data.slug)}></ButtonComp>
            </Col>
        </Row>
    </div>
}

export default ProductComp