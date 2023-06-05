import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = ({ text, className, onClickCB, width }) => {
    return <Button
        className={className}
        style={{width: width!= undefined?width:'auto'}}
        onClick={() => onClickCB()}
    >{text}</Button>
}

export default ButtonComp