import React, { useState } from 'react'
import projectArray from '../../assets/projectData'



export default function ProjectColumns() {




    const Projects = () => {
        return (
            <>
            {projectArray.map(project => {
                return (
                    <div class='column is-one-third'>
                        <figure class='image is-square'>
                            <img src={project.image}/>
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
                    
                </div>
            </section>
        </body>
    )
}