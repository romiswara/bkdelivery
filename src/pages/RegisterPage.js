import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
import InputComp from '../components/global/InputComp'
import ButtonComp from '../components/global/ButtonComp'
import { useNavigate } from "react-router-dom";
import RadioComp from '../components/global/RadioComp'
import DateComp from '../components/global/DateComp'


const RegisterPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        fullname: "",
        email: "",
        dateofbirth: "",
        gender: "",
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

    useEffect(() => {
        console.log("data", data)
    }, [data])


    return <Layout>
        <Container className='mt-5'>
            <Row>
                <Col md={{
                    span: 6,
                    offset: 3
                }} >
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="title text-center">Register</h5>
                            <p className="card-subtitle mb-5 mt-3 text-center">Please enter your mobile number to register</p>
                            <InputComp
                                type="text"
                                placeholder="Full Name"
                                onchangeValue={(value) => changeData("fullname", value)}>
                            </InputComp>
                            <InputComp
                                type="text"
                                placeholder="Email"
                                onchangeValue={(value) => changeData("email", value)}>
                            </InputComp>
                            <InputComp
                                type="text"
                                groupText="+62"
                                placeholder="8680123456 (example)"
                                onchangeValue={(value) => changeData("phone", value)}>
                            </InputComp>
                            <DateComp onChangeValue={(val) => changeData("dateofbirth", val)} />
                            <ul className='list-inline'>
                                <li className='list-inline'>
                                    <RadioComp
                                        label="Male"
                                        onchangeValue={(value) => changeData("gender", "male")}
                                    />
                                </li>
                                <li className='list-inline'>
                                    <RadioComp
                                        label="Female"
                                        onchangeValue={(value) => changeData("gender", "female")}
                                    />
                                </li>

                            </ul>
                            <InputComp
                                type="password"
                                placeholder="Password"
                                onchangeValue={(value) => changeData("password", value)}>
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