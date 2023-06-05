import React, { useState } from 'react'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
import InputComp from '../components/global/InputComp'
import ButtonComp from '../components/global/ButtonComp'
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        phone: "",
        password: ""
    })
    const changeData = (key, value) => {
        setData(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const submitFunc = () => {
        alert("submit")
    }

    const navigateRegister = () => {
        navigate("/accounts/register");
    }
    return <Layout>
        <Container>
            <Row>
                <Col md={{
                    span: 4,
                    offset: 4
                }} >
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title text-center">Register</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center">Please enter your mobile number to register</h6>
                            <InputComp
                                type="text"
                                groupText="+62"
                                placeholder="8680123456 (example)"
                                onchangeValue={(value) => changeData("phone", value)}>
                            </InputComp>

                            <ButtonComp text="Register"
                                width="100%"
                                className="button-primary"
                                onClickCB={submitFunc}
                            />
                           <div className='text-center'>
                           <img src="./../assets/bg.jpg" />
                           </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default RegisterPage