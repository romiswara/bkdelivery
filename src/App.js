import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CarouselComp from './components/CarouselComp';
import FooterComp from './components/FooterComp';
import NavbarComp from './components/NavbarComp';
import ProductComp from './components/ProductComp';
import product from './data/product.json'
function App() {
  console.log("product", product)
  const [productList, setProductList] = useState(product)
  return (
    <div className="App">
      <div className='body'>

        <NavbarComp></NavbarComp>
        <CarouselComp></CarouselComp>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='text-center'>Our Menus</h3>
            </Col>
          </Row>
          <Row>
           
              {productList.map(p => {
                return  <Col md={4}><ProductComp data={p}></ProductComp> </Col>
              })}

           
          </Row>
        </Container>
        <FooterComp></FooterComp>
      </div>
    </div>
  );
}

export default App;
