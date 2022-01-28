import React from 'react' 



export const Subtitle = ({ subtitle, aos }) => {
    return (
        <h1 data-aos={aos} data-aos-once-true class='subtitle is-size-2-desktop is-size-5-mobile has-text-weight-light has-text-light'>
            {subtitle}
        </h1>
    )
}