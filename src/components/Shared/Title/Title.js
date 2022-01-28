import React from 'react' 




export const Title = ({ title, color, aos }) => {
    return (
        <h1 data-aos={aos} data-aos-once-true class={`has-text-${color} has-text-weight-light title is-spaced is-size-1-fullhd is-size-2 desktop is-size-4 mobile has-text-light`}>
            {title}
        </h1>
    )
}