import React from 'react'




export const CardImage = ({ image, name }) => {
    return (
        <div class='card cardpad'>
            <div class='card-image'>
                <figure class='image is-square'>
                    <img src={image} />
                </figure>
            </div>
        </div>
    )
}