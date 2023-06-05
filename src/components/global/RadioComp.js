import React from 'react'
import { Form } from 'react-bootstrap'

const RadioComp = ({label,id,onchangeValue}) => {
    return <>
        <Form.Check
            type="radio"
            label={label}
            id={id}
            onClick={(val) => onchangeValue(val)}
        />
    </>
}

export default RadioComp