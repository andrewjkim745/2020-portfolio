import React from 'react' 
import CopyrightIcon from '@material-ui/icons/Copyright';





export const CopyRight = () => {
    return (
        <>
        <div style={{opacity:.7}} class='is-size-1-fullhd has-text-white is-flex is-align-items-center mt-3'>
            <p class='is-size-1-fullhd'>Handcrafted by me</p>
            <CopyrightIcon/>
            <p class='is-size-1-fullhd'>Andrew Kim</p>
        </div>
        <div style={{opacity: .6}} class='mt-3'>
            <a href="https://bulma.io">
            <img class='is-size-1-fullhd' src='https://bulma.io/images/made-with-bulma--white.png' width="400" height="400"/>
            </a>
        </div>
        </>
    )
}