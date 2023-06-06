import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
const CounterComp = ({ totalCB}) => {

    const [total, setTotal] = useState(1)
    const decrementFunc = () => {
        if(total>1){
            setTotal(parseInt(total) - 1)
        }
    }

    const incrementFunc = () => {
        setTotal(parseInt(total) + 1)
    }

    const onchangeValue = (val) => {
        setTotal(val)
    }

    useEffect(() => {
        totalCB(total)
    },[total])

    return <div className='qty-wrapper'>
        <div onClick={decrementFunc} style={{ width: '30px', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faMinus} color='#ED7802' />
        </div>
        <div>

            <Form.Control
                type="number"
                style={{textAlign:'center'}}
                onChange={($e) => onchangeValue($e.target.value)}
                value={total}
            />
        </div>
        <div onClick={incrementFunc} style={{ width: '30px', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faPlus} color="#ED7802" />
        </div>
    </div>
}

export default CounterComp