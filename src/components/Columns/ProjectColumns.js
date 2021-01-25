import React, { useState } from 'react'
import { projectArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'
import  Button from '../Shared/button'



export default function ProjectColumns() {


    const Projects = () => {
        return (
            <div class='columns is-gapless is-multiline'>
                {projectArray.map(project => {
                    return (
                        <>
                        <CardItem
                        image={project.image}
                        description={project.description}
                        color='dark'
                        repo={project.repo}
                        title='View Repo'
                        >
                            {project.languages.map(language =>{
                                return (
                                    <>
                                    <img class='image is-32x32' src={language.language}/>
                                    </>
                                )
                            })}
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
                    <h1 class='title is-size-2 has-text-centered'>Projects</h1>
                    {Projects()}
            </section>
        </body>
    )
}