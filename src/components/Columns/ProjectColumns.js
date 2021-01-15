import React, { useState } from 'react'
import { projectArray } from '../../assets/projectData'



export default function ProjectColumns() {


    const [ hovered, setHovered ] = useState(false) 

    const Projects = () => {
        return (
            <div class='columns is-multiline'>
            {projectArray.map(project => {
                return (
                    <>
                    <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} class='column is-one-third'>
                        <figure class='image is-square'>
                            <img src={project.image}/>
                            <div class='columns'>
                            {project.languages.map(language => {
                                return (
                                    <div class='column'>
                                        <figure class='image is-32x32'>
                                        <img src={language.language}/>
                                        </figure>
                                    </div>
                                )
                            })}
                            </div> 
                        </figure>
                    </div>
                    </>
                )
            })}
            </div>
        )
    }


    return ( 
        <body>
            <section class='section'>
                {/* <div class='container'> */}
                    <h1 class='title is-size-2 has-text-centered'>Projects</h1>
                    {Projects()}
                {/* </div> */}
            </section>
        </body>
    )
}