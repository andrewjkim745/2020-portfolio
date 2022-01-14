import React, { useState } from 'react'
import { projectArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'
import Button from '../Shared/button'
import Dropdown from '../Shared/dropdown'



export default function ProjectColumns() {

    const [projects, setProjects] = useState('')
    const [done, setDone] = useState(false)


    sortByAlphabet = () => {
        let sorted = projectArray.sort(function (a, b) {
            return a.title - b.title
        })
        setProjects(sorted)
    }

    sortByDateLatest = () => {
        let sorted = projectArray.sort(function (a, b) {
            return b.date - a.date
        })
        setProjects(sorted)
    }

    sortByDateOldest = () => {
        let sorted = projectArray.sort(function (a, b) {
            return a.date - b.date
        })
        setProjects(sorted)
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setDone(true)
        }
    }, [projects]);


    function Projects() {
        return (
            <>
                {done ? 
                <div class='columns is-gapless is-multiline p1'>
                    {projects.map(project => {
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
                </div> :
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
                }
            </>
        )
    }


    return (
        <body>
            <section class='section has-background-danger'>
                <h1 class='mb-2 mt-3 title has-text-centered '>Projects</h1>
                <Dropdown
                    sortA={sortByAlphabet}
                    sortL={sortByDateLatest}
                    sortO={sortByDateOldest}
                />
                {Projects()}
            </section>
        </body>
    )
}