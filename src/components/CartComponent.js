import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartComponent = () => {
    return <div className='cart'>
        <div className='cart__wrapper'>
            <FontAwesomeIcon icon={faCartArrowDown} className='cart__icon' />
            <div className='cart__notif' style={{position:'absolute',background:'red'}}>3</div>
        </div>

    </div>
}

export default CartComponent