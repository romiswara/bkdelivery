import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = ({text, className, onClickCB}) => {
    return <Button className={className} onClick={() => onClickCB()}>{text}</Button>
}

export default ButtonComp