import React, { useState } from 'react'
import projectArray from '../../assets/projectData'



export default function ProjectColumns() {


    const [ hovered, setHovered ] = useState(false) 

    const Projects = () => {
        return (
            <>
            {projectArray.map(project => {
                return (
                    <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} class='column is-one-third'>
                        <figure class='image is-square'>
                            <img src={project.image}/>
                            <div class='columns'>
                            {project.languages.map(language => {
                                return (
                                    <div class='column'>
                                    <img src={language}/>
                                    </div>
                                )
                            })}
                            </div>
                        </figure>
                    </div>
                )
            })}
            </>
        )
    }


    return ( 
        <body>
            <section class='section'>
                <div class='container'>
                    {Projects}
                </div>
            </section>
        </body>
    )
}