import React, { useState } from 'react'
import Layout from '../Layout'
import { Col, Container, Row } from 'react-bootstrap'
import InputComp from '../components/global/InputComp'
import ButtonComp from '../components/global/ButtonComp'
import { useNavigate } from "react-router-dom";
import user from './../data/user.json'
import MessageComp from '../components/MessageComp'

const LoginPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        phone: "",
        password: ""
    })
    const [message,setMessage] = useState({
        show:false,
        message:"",
        background:''
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
        console.log("data", data)
        // alert("submit")
        let phone =  data.phone.charAt(0)=="6"?data.phone:"62"+data.phone
        let exist = user.find(u => {
            return u.phone ==phone
        })

        if(exist){
            if(exist.password == data.password){
                setMessage({
                    show:true,
                    message:"Login success",
                    background:'green'
                })
            } else {
                setMessage({
                    show:true,
                    message:"Login failed, invalid password!",
                    background:'red'
                })
            }
        } else {
            setMessage({
                show:true,
                message:"User Not Found",
                background:'red'
            })
        }
        console.log("exist", exist)
      
    }

    const navigateRegister = () => {
        navigate("/accounts/register");
    }
    return <Layout>
         {message.show && <MessageComp background={message.background} message={message.message}></MessageComp>}
        <Container>
           
            <Row>
                <Col md={{
                    span: 6,
                    offset: 3
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
                                onchangeValue={(value) => changeData("password", value)}>
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
                                        <ButtonComp text="Register" className="button-primary"
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