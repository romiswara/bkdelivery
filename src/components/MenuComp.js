import React from 'react'

const MenuComp = ({data,clickMenuCB, active}) => {
    return <div style={{
        background:active==data.slug?'#FAAF18':'#FBE6D6',
        color:'#502314',
        padding:'10px 10px',
        borderRadius:'10px',
        margin:'10px auto',
        cursor:'pointer'
    }} onClick={() => clickMenuCB(data)}>
        {data.name}
    </div>
}

export default MenuComp