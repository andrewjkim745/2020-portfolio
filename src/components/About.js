import React from 'react'
import { Column } from './Columns/Column'
import { Title } from './Shared/Title/Title'
import { Subtitle } from './Shared/Title/Subtitle'
import Avatar from '../assets/andrew.svg'

export const About = () => {
    return (
        <section data-aos='fade-in' data-aos-once='true' id='About' class='is-large is-primary has-text-centered is-long has-background-danger p-5 py-6'>
            <div class='container'>
                <div class='columns is-centered'>
                    <Column
                    columnSize={'column'}
                    >   
                        <figure class='mb-6 image is-3by1'>
                        <img src={Avatar}/>
                        </figure>
                        <Title
                        title={'Hi, my name is Andrew. Nice to meet you'}
                        />
                        <Subtitle
                        subtitle={'In October of 2018 I took my first few steps towards becoming a developer. I was always fascinated with technology and coding and developed an interest in building my own websites or applications. Starting with code courses on Udemy and studying independently, Ive built up skills that have helped me become a competent full stack developer. Those skills landed me positions at startups and private companies doing what I love. My work experience and hobby projects have equipped me to write code that functions well and elevates the end user experience.'}
                        />
                    </Column>
                </div>
            </div>
         </section>
    )
}