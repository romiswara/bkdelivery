import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const InputComp = ({ label, type, onchangeValue, groupText, placeholder }) => {


    return <>
        <div className="col-auto" style={{ textAlign: 'left' }}>
            {label != undefined && <label className="sr-only" for="inlineFormInputGroup">{label}</label>}
            <div className="input-group mb-2">
                <InputGroup className="mb-3">
                    {groupText != undefined && <InputGroup.Text id="basic-addon1">{groupText}</InputGroup.Text>}
                    <Form.Control
                        type={type}
                        placeholder={placeholder}
                        onChange={($e) => onchangeValue($e.target.value)}
                    />
                </InputGroup>
            </div>
        </div>
    </>
}

export default InputComp