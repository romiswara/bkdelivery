import React, { useState } from 'react'
import CartComponent from './CartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const NavbarComp = () => {
    const navigate = useNavigate()
    const [showSidebar,setShowSidebar] = useState(true)
    const [menus, setMenus] = useState([
        {
            label: "Delivery",
            menu: "Order",
            path: "/menus"
        },
        {
            label: "Get Fresh",
            menu: "Promotions",
            path: "/news"
        }
    ])

    const sidebarFunc = () => {
        setShowSidebar(!showSidebar)
    }

    const navigateTo = (path) => {
        navigate(path);
    }

    return <div className='navbarBK'>
        <div>
            <img src="./../assets/logo.png" alt="logo" className='logo' onClick={() => navigateTo("/")}/>
        </div>
        <div>
            {showSidebar &&   <ul className='list'>
                {menus.map((menu, index) => {
                    return <li key={index} className='list-inline' onClick={() => navigateTo(menu.path)}>
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