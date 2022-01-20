import React, { useState, useEffect, useRef } from 'react'
import { projectArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'
import Searchbar from '../Shared/searchbar'
import  Dropdown  from '../Shared/dropdown'
import '../Shared/styles.css'



export default function ProjectColumns() {

    const [projects, setProjects] = useState('')
    const [done, setDone] = useState(false)
    const [ updated , setUpdated ] = useState(false)
    const [ text, setText ] = useState('')
    const [ suggestions, setSuggestions ] = useState([])

    function onTextChange(e) {
        const value = e.target.value
        console.log(value)
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);
            let i = 0
            let suggestions = []

            while (i < projectArray.length - 1)  {
                    let match = projectArray[i].tech.filter(v=> regex.test(v))
                    console.log('matches', match)
                    match.forEach(tech => {
                        (suggestions.includes(tech) ? console.log('already included') : suggestions.push(tech))
                    })
                    i++
            }
            console.log('suggestions', suggestions)
            setSuggestions(suggestions)
        }
        setText(value)
    }
    
    function suggestionsSelected(tech) {
        setText(tech)
        setSuggestions([])
        let sorted = projectArray.sort().filter(p => p.tech.includes(tech))
        setProjects(sorted)
        setUpdated(!updated)
    }

    function renderSuggestions() {
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul>
                {suggestions.map(tech => <li key={tech} onClick={(e) => suggestionsSelected(tech)}>{tech}</li>)}
            </ul>
        )
    }
    function sortByAlphabet () {
        let sorted = projectArray.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} )
        console.log('clicked')
        setProjects(sorted)
        setUpdated(!updated)
    }

    function sortByDateLatest () {
        let sortedLatest = projectArray.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        })
        setProjects(sortedLatest)
        setUpdated(!updated)
    }

    function sortByDateOldest() {
        let sortedOldest = projectArray.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        })
        setProjects(sortedOldest)
        setUpdated(!updated)
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setDone(true)
        }
    }, [projects, updated]);

    function Projects() {
        return (
            <>
                {done ? 
                <div class='columns is-gapless is-multiline p1'>
                    {projects.map(project => {
                        return (
                            <>
                                <CardItem
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    color='dark'
                                    repo={project.repo}
                                    view='View Project'
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
                                        title={project.title}
                                        image={project.image}
                                        description={project.description}
                                        color='dark'
                                        repo={project.repo}
                                        view='View Project'
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
      
            <section id='Projects' onClick={()=> setSuggestions([])}class='section has-background-danger'>
                <h1 class='mb-2 mt-3 title has-text-centered has-text-light has-text-weight-light'>Projects</h1>
                <div class='columns is-gapless is-multiline p1'>
                <Searchbar
                onChange={onTextChange}
                text={text}>
                {renderSuggestions()}
                </Searchbar>
                <Dropdown
                    sortA={sortByAlphabet}
                    sortL={sortByDateLatest}
                    sortO={sortByDateOldest}
                />
                </div>
                {Projects()}
            </section>
        
    )
}