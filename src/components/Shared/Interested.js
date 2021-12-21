import React  from 'react'
import { NavLink } from 'react-router-dom'


export const Interested = () => {
    return (
        <section class='has-background-dark has-text-centered'>
        <div class='container'>
            <div class='box shiftTop p-6'>
                <div class='columns is-align-items-center'>
                    <div class='column'>
                        <h2 class='title is-size-1-fullhd'>Start a Project</h2>
                    </div>
                    <div class='column'>
                        <h2 class='subtitle is-size-1-fullhd'>Interested in working together? We should meet up and chat!</h2>
                    </div>
                    <div class='column'>
                        <NavLink exact to='/contact'>
                        <a class='is-size-1-fullhd button is-danger is-outlined is-rounded is-medium'>Lets do this</a>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}