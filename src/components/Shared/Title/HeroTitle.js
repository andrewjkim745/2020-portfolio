import React from 'react'
import './HeroTitle.scss'
import TextLoop from 'react-text-loop'




export const HeroTitle = ({ title, color, fontFamily }) => {

    return (
        <div className='center'>
        <section class="hero">
            <div class='hero-body'>
                <div class='container has-text-centered'>
                    <h1 class='title is-spaced has-text-weight-light is-size-5-mobile' style={{ fontFamily: `${fontFamily}`, color: `${color}` }} >{title}</h1>
                    <TextLoop
                    mask={true}
                    interval={1500}
                    springConfig={{
                        stiffness: 180,
                        damping: 8
                    }}
                    >
                        <h1 class='subtitle has-text-weight-light is-size-5-mobile has-text-danger'>an avid basketball fan</h1>
                        <h1 class='subtitle has-text-weight-light is-size-5-mobile has-text-danger'>a nationally ranked fencer</h1>
                        <h1 class='subtitle has-text-weight-light is-size-5-mobile has-text-danger'>a movie/video game lover</h1>
                        <h1 class='subtitle has-text-weight-light is-size-5-mobile has-text-danger'>a proud dog owner</h1>
                    </TextLoop>
                </div>
            </div>
        </section>
        </div>
    )
}