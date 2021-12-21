import React from 'react' 





export default function Button({ title, repo, color }) {
    return (
        <>
        <a href={repo}>
        <button class={`button is-${color}`}><h2>{title}</h2></button>
        </a>
        </>

    )
}