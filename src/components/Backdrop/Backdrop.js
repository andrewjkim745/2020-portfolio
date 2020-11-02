import React from 'react' 






export const Backdrop = ({ color }) => {
    return (
        <div
        style={{ 
            backgroundColor: color,
            backgroundImage: "url('https://i.imgur.com/gSgNzlZ.jpg')",
            height: '100vh',
            width: '100vw'
         }}>
             {props.children}
        </div>
    )
}