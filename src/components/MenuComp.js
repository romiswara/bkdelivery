import React from 'react'

const MenuComp = ({data,clickMenuCB}) => {
    return <div style={{
        background:'#FBE6D6',
        color:'#502314',
        padding:'10px 10px',
        borderRadius:'10px',
        margin:'10px auto'
    }} onClick={() => clickMenuCB(data)}>
        {data.name}
    </div>
}

export default MenuComp