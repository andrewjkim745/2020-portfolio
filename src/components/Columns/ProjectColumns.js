import React, { useState, useEffect, useRef } from 'react'
import { projectArray, techArray } from '../../assets/projectData'
import CardItem from '../Shared/Card/CardItem'
import Searchbar from '../Shared/searchbar'
import  Dropdown  from '../Shared/dropdown'



export default function ProjectColumns() {

    const [projects, setProjects] = useState('')
    const [done, setDone] = useState(false)
    const [ updated , setUpdated ] = useState(false)
    const [ text, setText ] = useState('')
    const [ suggestions, setSuggestions ] = useState([])

    function onTextChange(e) {
        let suggestions = []
        const value = e.target.value
        console.log(value)
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);
            let suggestions = techArray.sort().filter(v => regex.test(v))
            setSuggestions(suggestions)
            // let suggestions = projectArray.sort().filter(v => v.tech.includes(value))
            // projectArray.forEach(project => {
            //    let newArray = []
            //    const newerArray = newArray.push(project.tech)
            //     console.log('new array', newerArray)
            // console.log(project.tech)
                // let suggestions = project.tech.sort().filter(v => regex.test(v))
                // console.log('suggestions from map', suggestions)
                // setSuggestions(suggestions)
                // console.log('suggestions',suggestions)
            // })
        }
        
        console.log('suggestions',suggestions)
        setText(value)
        console.log('text state', value)
    }

    function suggestionsSelected(tech) {
        setText(tech)
        setSuggestions([])
        let sorted = projectArray.sort().filter(p => p.tech.includes(tech))
        console.log('srted',  sorted)
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
        console.log(sorted)
        setUpdated(!updated)
    }

    function sortByDateLatest () {
        let sortedLatest = projectArray.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        })
        setProjects(sortedLatest)
        console.log('sorted by latest' , sortedLatest)
        setUpdated(!updated)
    }

    function sortByDateOldest() {
        let sortedOldest = projectArray.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        })
        setProjects(sortedOldest)
        console.log('sorted by oldest', sortedOldest)
        setUpdated(!updated)
        
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setDone(true)
            console.log('useeffect', projects)
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
      
            <section class='section has-background-danger'>
                <h1 class='mb-2 mt-3 title has-text-centered has-text-light'>Projects</h1>
                <div class='is-flex is-flex-direction-column'>
                <Searchbar
                onChange={onTextChange}
                text={text}
                />
                {renderSuggestions()}
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