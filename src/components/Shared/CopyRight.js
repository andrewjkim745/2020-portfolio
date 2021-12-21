import React from 'react' 
import CopyrightIcon from '@material-ui/icons/Copyright';





export const CopyRight = () => {
    return (
        <>
        <div style={{opacity:.7}} class='is-flex is-align-items-center has-text-white'>
            <h4 class='subtitle has-text-white mt-3' >Handcrafted by me</h4>
        </div>
        <div style={{opacity: .6}} class='mt-3'>
            <a href="https://bulma.io">
            <img src='https://bulma.io/images/made-with-bulma--white.png' width="300" height="300"/>
            </a>
        </div>
        </>
    )
}