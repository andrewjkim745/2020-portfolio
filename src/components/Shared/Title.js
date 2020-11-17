import React from 'react'




export const HeroTitle = ({ title, color, fontFamily}) => {
    return (
        <div class='container has-text-centered'>
            <p style={{fontFamily:`${fontFamily}`, color: `${color}`}}class='title'>{title}</p>
        </div>
    )
}