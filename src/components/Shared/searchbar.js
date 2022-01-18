import React from 'react'




export default function Searchbar ({ onChange, text}) {


    return (
        <div class='is-flex is-flex-direction-column'>
        <input onChange={onChange} class="input is-small is-rounded m1" type="text" value={text} placeholder="Search for Projects by language/framework ex. react"></input>
        </div>

    )
}