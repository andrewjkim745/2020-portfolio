import React, { useState } from 'react'
import { projectArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'
import  Button from '../Shared/button'



export default function ProjectColumns() {


    const Projects = () => {
        return (
            <div class='columns is-gapless is-multiline p1'>
                {projectArray.map(project => {
                    return (
                        <>
                        <CardItem
                        image={project.image}
                        description={project.description}
                        color='dark'
                        repo={project.repo}
                        title='View Project'
                        >
                        </CardItem>
                        </>
                    )
                })}
            </div>
        )
    }

    return ( 
        <body>
            <section class='section' style={{backgroundColor: 'powderblue'}}>
                    <h1 class='mb-2 mt-3 title has-text-centered '>Projects</h1>
                    {Projects()}
            </section>
        </body>
    )
}