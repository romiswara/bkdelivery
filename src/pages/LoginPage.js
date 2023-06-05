import React, { useState } from 'react'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
import InputComp from '../components/global/InputComp'
import ButtonComp from '../components/global/ButtonComp'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
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
                    span:4,
                    offset:4
                }} >
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title text-center">Welcome!</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center">Enter your mobile number and password to login</h6>
                            <InputComp
                                type="text"
                                groupText="+62"
                                placeholder="8680123456 (example)"
                                onchangeValue={(value) => changeData("phone", value)}>
                            </InputComp>
                            <InputComp
                                type="password"
                                placeholder="password"
                                onchangeValue={(value) => changeData("phone", value)}>
                            </InputComp>
                            <ButtonComp text="Login" 
                            width="100%"
                            className="button-primary"
                            onClickCB={submitFunc}
                            />
                            <p>Forget Password?</p>
                <div>
                    <h2>Not A Member Yet?</h2>
                    <Row>
                        <Col md={8}>
                            <p>Register to get reward points and exclusive promotions.</p>
                        </Col>
                        <Col md={4}>
                            <ButtonComp text="Register"   className="button-primary"
                            onClickCB={navigateRegister} />
                        </Col>
                    </Row>
                </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
}

export default LoginPage