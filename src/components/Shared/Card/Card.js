
import React from 'react'
// import '../Styles/Card.css'




export const Card = (props) => {
    return (
        <div style={{ position: 'relative' }} className='column is-one-third' onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <figure class='image is-square'>
                <img src={props.image} />
            </figure>
            {props.children}
            {props.renderVotesRatings}
        </div>
    )
}