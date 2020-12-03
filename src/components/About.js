import React from 'react'
import { Column } from './Columns/Column'
import { Title } from './Shared/Title/Title'
import { Subtitle } from './Shared/Title/Subtitle'
import Avatar from '../assets/andrew.svg'
import aReality from '../assets/aReality.svg'



export const About = () => {
    return (
        <section class='is-large is-primary has-text-centered is-long has-background-danger p-5 py-6'>
            <div class='container'>
                <div class='columns is-centered'>
                    
                    <Column
                    columnSize={'column is-three-fifths'}
                    >   
                        <img class='mb-4' src={Avatar}/>
                        <Title
                        title={'Hi, my name is Andrew. Nice to meet you'}
                        />
                        <Subtitle
                        subtitle={'A few years ago I tried my hand at programming with some free code courses such as Udemy and have been hooked ever since. Ever since then I have developed into a competent Full Stack Developer and have gained valuable experience working for startups and small businesses. These opportunities allowed me to learn first hand how to build the best possible product for consumer experience and use.'}
                        />
                    </Column>
                </div>
            </div>
         </section>
    )
}