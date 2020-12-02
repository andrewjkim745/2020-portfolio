import React from 'react'
import { Column } from './Columns/Column'
import { Title } from './Shared/Title/Title'
import { Subtitle } from './Shared/Title/Subtitle'
import Avatar from '../assets/andrew.svg'



export const About = () => {
    return (
        <section class='is-medium is-danger has-text-centered is-long'>
            <div class='container'>
                <div class='columns is-centered'>
                    <img src={Avatar}/>
                    <Column
                    columnSize={'column is-three-fifths'}
                    >   
                        <Title
                        title={'Hi, my name is Andrew. Nice to meet you'}
                        />
                        <Subtitle
                        subtitle={'A few years ago I tried my hand at programming with some free code courses such as Udemy and have been hooked ever since. Ever since then I have developed into a extremely competent Full Stack Developer and have gained experience working for startups and small businesses. These opportunities allowed me to experience first hand how to build the best possible product for consumer experience and use. I also had the chance to collaborate with talented UX designers and have learned to be confident in my abilities to push out what is asked of me. I describe myself as a motivated but curious individual, with natural problem solving skills and dedication'}
                        />
                    </Column>
                </div>
            </div>
        </section>
    )
}