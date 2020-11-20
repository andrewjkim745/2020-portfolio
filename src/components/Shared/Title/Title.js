import React from 'react'
import './Title.scss'




export const HeroTitle = ({ title, color, fontFamily }) => {
    return (
        <div className='center'>
        <section class="hero">
            <div class='hero-body'>
                <div class='container has-text-centered'>
                    <p class='title has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile' style={{ fontFamily: `${fontFamily}`, color: `${color}` }} >{title}</p>
                </div>
            </div>
        </section>
        </div>
    )
}