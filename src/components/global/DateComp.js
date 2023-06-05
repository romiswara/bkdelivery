import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
const DateComp = ({onChangeValue}) => {
    const [dateOfBirth, setDateOfBirth] = useState({
        date: "",
        month: "",
        year: ""
    })
    const [date, setDate] = useState([])
    const [month, setMonth] = useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ])
    const [year, setYear] = useState([])

    useEffect(() => {
        let tempDate = []
        for (let a = 1; a < 32; a++) {
            tempDate.push(a)
        }
        let pastYear = 1943
        let tempYear = []
        for (let b = 0; b < 80; b++) {
            tempYear.push(pastYear + b)
        }
        setDate(tempDate)
        setYear(tempYear)

    }, [])


    const changeData = (key, value) => {
        setDateOfBirth(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const joinBirth = (selected_date,selected_month,selected_year) => {
        return `${selected_date}-${selected_month}-${selected_year}`
    }

    useEffect(() => {
        console.log("dateOfBirth",dateOfBirth)
        if(dateOfBirth.date !="" && dateOfBirth.month != "" && dateOfBirth.year != ""){
            let newBirth = joinBirth(dateOfBirth.date,dateOfBirth.month,dateOfBirth.year)
            onChangeValue(newBirth)
        }
    },[dateOfBirth])
    return <>
        <Row>
            <Col>
                <div className="col-auto" style={{ textAlign: 'left' }}>
                    <div className="input-group mb-2">
                        <InputGroup className="mb-3">
                            <Form.Select onChange={($e) => changeData("date", $e.target.value)}>
                                {date.map((d, index) => {
                                    return <option key={index} value={d}>{d}</option>
                                })}
                            </Form.Select>
                        </InputGroup>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="col-auto" style={{ textAlign: 'left' }}>
                    <div className="input-group mb-2">
                        <InputGroup className="mb-3">
                            <Form.Select onChange={($e) => changeData("month", $e.target.value)}>
                                {month.map((m, index) => {
                                    return <option key={index} value={m}>{m}</option>
                                })}
                            </Form.Select>
                        </InputGroup>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="col-auto" style={{ textAlign: 'left' }}>
                    <div className="input-group mb-2">
                        <InputGroup className="mb-3">
                            <Form.Select onChange={($e) => changeData("year", $e.target.value)}>
                                {year.map((y, index) => {
                                    return <option key={index} value={y}>{y}</option>
                                })}
                            </Form.Select>
                        </InputGroup>
                    </div>
                </div>
            </Col>
        </Row>
    </>
}

export default DateComp