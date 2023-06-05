import React, { useState ,useLayoutEffect, useEffect} from 'react'
import CartComponent from './CartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const NavbarComp = () => {
    const navigate = useNavigate()
    const [showSidebar,setShowSidebar] = useState(true)
    const [menus, setMenus] = useState([
        {
            label: "",
            menu: "Home",
            path: "/"
        },
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

    useLayoutEffect(() => {
        setShowSidebar(true)
    },[])


  useEffect(() => {
    let appClass = document.getElementsByClassName("App")
    let navbarBKClass = document.getElementsByClassName("navbarBK")
    if(showSidebar && window.innerWidth<1024){
        if(appClass){
            appClass[0].style.maxHeight="100vh"
            appClass[0].style.overflow="hidden"         
        }
        let query = document.querySelector('#root > div > div.navbarBK > div:nth-child(2)')
        if(query){
            query.style.height="100vh"
        }
    } else {
        if(appClass){
            appClass[0].style.maxHeight="auto"
            appClass[0].style.overflow="auto"
        }
        let query = document.querySelector('#root > div > div.navbarBK > div:nth-child(2)')
        if(query){
            query.style.height="auto"
            query.style.background="#2D2D2D"
        }
    }
  },[showSidebar])

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
            {showSidebar &&    <div onClick={() => navigateTo('/accounts/login')}>Login</div> }
         
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