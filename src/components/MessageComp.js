import React from 'react'

const MessageComp = ({message,background}) => {
    return <div style={{background:background,width:'100%',height:'30px',textAlign:'center',color:'#fff',height:'40px',fontSize:'16px',paddingTop:'7px'}}>
        {message}
    </div>
}

export default MessageComp