import React from 'react' 




export const Title = ({ title, color }) => {
    return (
        <h1 class={`has-text-${color} title is-spaced is-size-1-fullhd is-size-2 desktop is-size-4 mobile has-text-light`}>
            {title}
        </h1>
    )
}