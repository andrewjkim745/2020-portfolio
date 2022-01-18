import React from 'react'
import './styles.css'


export default function Searchbar ({ onChange, text, children}) {


    return (
        <div class='TypeAheadDropDown'>
        <input onChange={onChange} type="text" value={text} placeholder="Search for Projects by language/framework ex. react"/>
        {children}
        </div>

    )
}