import React from 'react' 
import  Navbar  from '../Navbar/Navbar'






export const Backdrop = ({ color }) => {
    return (
        <div
        data-aos='fade-in' data-aos-once='true'
        style={{ 
            backgroundColor: `${color}`,
            backgroundImage: "url('https://i.imgur.com/gSgNzlZ.jpg')",
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
            position: 'relative',
            zIndex: -999
         }}>
        </div>
    )
}