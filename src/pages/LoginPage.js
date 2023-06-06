import React, { useState,useEffect } from 'react'
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

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return <Layout>
         {message.show && <MessageComp background={message.background} message={message.message}></MessageComp>}
        <Container className='mt-5'>
           
            <Row>
                <Col md={{
                    span: 6,
                    offset: 3
                }} >
                    <div className="card loginbox" >
                        <div className="card-body">
                            <h5 className="text-center title-reg mt-3">Welcome!</h5>
                            <p className="card-subtitle mb-5 mt-3 text-center">Enter your mobile number and password to login</p>
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
                            <p className='teks-primary mt-3 forget' style={{cursor:'pointer'}}>Forget Password?</p>
                            <div>
                                <h5 className='title-reg'>Not A Member Yet?</h5>
                                <Row>
                                    <Col md={8}>
                                        <p>Register to get reward points and exclusive promotions.</p>
                                    </Col>
                                    <Col md={4}>
                                        <ButtonComp text="Register" className="button-secondary"
                                            onClickCB={navigateRegister} width="100%" />
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