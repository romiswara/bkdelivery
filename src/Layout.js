import React from 'react'
import NavbarComp from './components/NavbarComp'
import FooterComp from './components/FooterComp'

const Layout = ({ children }) => {
    return <>
        <NavbarComp></NavbarComp>
        <div style={{minHeight:'900px'}}>
        {children}
        </div>
        <FooterComp></FooterComp>
    </>
}

export default Layout