import React from 'react'
import './HeroTitle.scss'
import TextLoop from 'react-text-loop'




export const HeroTitle = ({ title, color, fontFamily }) => {

    return (
        <div className='center'>
        <section class="hero">
            <div class='hero-body'>
                <div class='container has-text-centered'>
                    <p class='title is-spaced has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile' style={{ fontFamily: `${fontFamily}`, color: `${color}` }} >{title}</p>
                    <TextLoop
                    mask={true}
                    interval={1500}
                    springConfig={{
                        stiffness: 180,
                        damping: 8
                    }}
                    >
                        <p class='subtitle has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile has-text-danger'>an avid basketball fan</p>
                        <p class='subtitle has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile has-text-danger'>a nationally ranked fencer</p>
                        <p class='subtitle has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile has-text-danger'>a movie/video game lover</p>
                        <p class='subtitle has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile has-text-danger'>a proud dog owner</p>
                    </TextLoop>
                </div>
            </div>
        </section>
        </div>
    )
}