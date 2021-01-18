import React, { useState } from 'react'
import { projectArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'



export default function ProjectColumns() {


    // const [ hovered, setHovered ] = useState(false) 


    // const renderDescription = (project, language) => {

    //     if (hovered) {

    //         return (
    //             <div className='description'>
    //                 <p>{project.description}</p>
    //                 <div class='is-flex is-justify-content-center is-align-items-center'>
    //                     <figure class='image is-32x32'>
    //                         <img src={language.language}/>
    //                     </figure>
    //                 </div>
    //             </div>
    //         )
    //     }
        
    // }

    // const Projects = () => {
    //     return (
    //         <div class='columns is-gapless is-multiline'>
    //         {projectArray.map(project => {
    //             return (
    //                 <>
    //                 <div onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} class='column is-one-third'>
    //                     <figure class='image is-square'>
    //                         <img src={project.image}/>
    //                         <div class='columns'>
    //                         </div> 
    //                     </figure>
    //                 </div>
    //                 </>
    //             )
    //         })}
    //         </div>
    //     )
    // }


    const Projects = () => {
        return (
            <div class='columns is-gapless is-multiline'>
                {projectArray.map(project => {
                    return (
                        <>
                        <CardItem
                        image={project.image}
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
            <section class='section'>
                    <h1 class='title is-size-2 has-text-centered'>Projects</h1>
                    {Projects()}
            </section>
        </body>
    )
}