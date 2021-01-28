import React from 'react' 
import CopyrightIcon from '@material-ui/icons/Copyright';





export const CopyRight = () => {
    return (
        <>
        <div style={{opacity:.7}} class='has-text-white is-flex is-align-items-center mt-3'>
            Handcrafted by me
            <CopyrightIcon/>
            Andrew Kim
        </div>
        <div style={{opacity: .6}} class='mt-3'>
            <a href="https://bulma.io">
            <img src='https://bulma.io/images/made-with-bulma--white.png' alt="Made with Bulma" width="163" height="31"/>
            </a>
        </div>
        </>
    )
}