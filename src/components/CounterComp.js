import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import InputComp from './global/InputComp'

const CounterComp = () => {

    const changeQtyFunc = (val) => {

    }
    
    return <div style={{display:'flex'}}>
        <div>
            <FontAwesomeIcon icon={faMinus} />
        </div>
        <div>
            <InputComp onchangeValue={() => changeQtyFunc()} />
        </div>
        <div>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    </div>
}

export default CounterComp