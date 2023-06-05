import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const InputComp = ({ label, type, onchangeValue, groupText, placeholder,value,textAlign }) => {

    const [inputValue,setInputValue] = useState(value)

    useEffect(() => {
        setInputValue(inputValue)
    },[value])

    return <>
        <div className="col-auto" style={{ textAlign: textAlign != undefined?textAlign:'left' }}>
            {label != undefined && <label className="sr-only" for="inlineFormInputGroup">{label}</label>}
            <div className="input-group mb-2">
                <InputGroup className="mb-1">
                    {groupText != undefined && <InputGroup.Text >{groupText}</InputGroup.Text>}
                    <Form.Control
                        type={type}
                        placeholder={placeholder}
                        onChange={($e) => onchangeValue($e.target.value)}
                        value={inputValue}
                    />
                </InputGroup>
            </div>
        </div>
    </>
}

export default InputComp