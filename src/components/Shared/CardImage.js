import React from 'react'




export const CardImage = ({ image, name }) => {
    return (
        <>
         {/* <div class='card cardpad'>
         <div class='card-image'> */}
                <figure class='image is-square'>
                    <img src={image} />
                </figure>
             {/* </div> */}
            <div class='is-flex is-justify-content-center is-align-items-centered'>
                <p class='title is-size-1-fullhd'>{name}</p>
            </div>
        {/* </div> */}
        </>
    )
}