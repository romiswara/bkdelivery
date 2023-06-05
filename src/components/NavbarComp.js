import React, { useState } from 'react'
import CartComponent from './CartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'
const NavbarComp = () => {
    const [showSidebar,setShowSidebar] = useState(true)
    const [menus, setMenus] = useState([
        {
            label: "Delivery",
            menu: "Order",
            path: "/"
        },
        {
            label: "Get Fresh",
            menu: "Promotions",
            path: "/"
        }
    ])

    const sidebarFunc = () => {
        setShowSidebar(!showSidebar)
    }

    return <div className='navbarBK'>
        <div>
            <img src="./../assets/logo.png" alt="logo" className='logo' />
        </div>
        <div>
            {showSidebar &&   <ul className='list'>
                {menus.map((menu, index) => {
                    return <li key={index} className='list-inline'>
                        <ul>
                            <li className='teks-primary'>{menu.label}</li>
                            <li>{menu.menu}</li>
                        </ul>
                    </li>
                })}
            </ul>}
          
        </div>
        <div>
            {showSidebar &&    <a>Login</a> }
         
        </div>
        <div>
            <CartComponent></CartComponent>
        </div>
        <div onClick={() => sidebarFunc()}>
            {showSidebar ? <FontAwesomeIcon icon={faXmark} className='navbarBK__toggle'/> : <FontAwesomeIcon icon={faBars} className='navbarBK__toggle '/>}
        </div>
    </div>
}

export default NavbarComp