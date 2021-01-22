import React from 'react' 





export default function Button({ title, repo, color }) {
    return (
        <>
        <a href={repo}>
        <button class={`button is-${color}`}>{title}</button>
        </a>
        </>

    )
}