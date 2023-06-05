import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'

const ProductComp = ({ data }) => {

    const onClickFunc = () => {
        alert("err")
    }
    return <div className='menu-box'>
        <div>
            <img src={data.image} className='img-fluid' />
        </div>
        <Row>
            <Col md={6}>
                <h5 style={{ textAlign: 'left' }}>{data.name}</h5>
                {data.price != undefined && <h5 style={{ textAlign: 'left' }}>{data.price}</h5>}
            </Col>
            <Col md={6}>
                <ButtonComp className="button-primary" text="Order" onClickCB={() => onClickFunc()}></ButtonComp>
            </Col>
        </Row>
    </div>
}

export default ProductComp