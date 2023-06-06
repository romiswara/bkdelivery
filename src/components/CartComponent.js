import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartComponent = ({total}) => {
    return <div className='cart'>
        <div className='cart__wrapper'>
            <FontAwesomeIcon icon={faCartArrowDown} className='cart__icon' />
            {total >0 &&   <div className='cart__notif' style={{position:'absolute',background:'red'}}>{total}</div>}
          
        </div>

    </div>
}

export default CartComponent