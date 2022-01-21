import React from 'react'




export const CardImage = ({ image, name }) => {
    return (
        <>
            <figure class='image is-square'>
                <img src={image} />
            </figure>
            <div class='is-flex is-justify-content-center is-align-items-centered'>
                <p>{name}</p>
            </div>
        </>
    )
}