import React from 'react' 




export const CardImage = ({ image, name }) => {
    return (
        <div class='card'>
        <div class='card-image'>
            <figure class='image is-square'>
                <img src={image}/>
            </figure>
        </div>
        <div class='content is-flex is-justify-content-center'>
            <p class='title is-size-2'>{name}</p>
        </div>
    </div>
    )
}