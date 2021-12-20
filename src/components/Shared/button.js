import React from 'react' 





export default function Button({ title, repo, color }) {
    return (
        <>
        <a href={repo}>
        <button class={`button is-${color}`}><h1>{title}</h1></button>
        </a>
        </>

    )
}