import React from 'react'
import './Title.scss'
import TextLoop from 'react-text-loop'




export const HeroTitle = ({ title, color, fontFamily }) => {


    const textArray = [
        {
            text: 'an avid basketball fan'
        },
        {
            text: 'a nationally ranked fencer'
        },
        {
            text: 'a movie/video game lover'
        }
    ]
    return (
        <div className='center'>
        <section class="hero">
            <div class='hero-body'>
                <div class='container has-text-centered'>
                    <p class='title has-text-weight-light is-size-2 is-size-1-fullhd is-size-5-mobile' style={{ fontFamily: `${fontFamily}`, color: `${color}` }} >{title}</p>
                    <TextLoop>
                        {textArray.map(words => {
                            return (
                                <p>{words.text}</p>
                            )
                        })}
                    </TextLoop>
                </div>
            </div>
        </section>
        </div>
    )
}