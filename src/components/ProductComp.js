import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import ButtonComp from './global/ButtonComp'
import { useNavigate } from 'react-router-dom'
import './../App.css';
const ProductComp = ({ data,showButton ,path}) => {
    const navigate = useNavigate();
    const onClickFunc = (name) => {
        var slug = name.replace(/ /g, '-');
        navigate(`/${path}/${slug}`)
    }
    return <div className='menu-box'  onClick={() => onClickFunc(path=="menus"?data.slug:data.name)} style={{cursor:'pointer'}}>
        <div className='mb-3'>
            <img src={data.image} className='img-fluid' />
        </div>
        <Row>
            <Col md={showButton?6:12}>
                <h5 style={{ textAlign: 'left' }}>{data.name}</h5>
                {data.price != undefined && <p style={{ textAlign: 'left' ,color:'#8B542F',fontSize:'18px'}} className='regularfont'>{data.price}</p>}
            </Col>
            {showButton &&  <Col md={6}>
                <ButtonComp width="100%" className="button-primary" text="Order" onClickCB={() => onClickFunc(path=="menus"?data.slug:data.name)}></ButtonComp>
            </Col>}
           
        </Row>
    </div>
}

export default ProductComp