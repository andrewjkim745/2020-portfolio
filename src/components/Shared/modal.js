import React from 'react'
import { Title } from '../Shared/Title/Title'
import { NavLink } from 'react-router-dom'




export const Modal = ({ className, onClick, sideDrawerClass }) => {
    return (
    <>
    <div class={className}>
        <div onClick={onClick} class='modal-background'>
            {/* <div class='modal-content'> */}
                <div class='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                    <div class={sideDrawerClass}>
                    <Title
                    title='About'
                    color='dark'
                    />
                    <Title
                    title='Portfolio'
                    color='dark'
                    />
                    <Title
                    title='Resume'
                    color='dark'
                    />
                    <Title
                    title='Contact'
                    color='dark'
                    />
                    </div>
                </div>
            {/* </div> */}
        </div>
        <button onClick={onClick} class="modal-close is-large" aria-label="close"></button>
    </div>
    </>
    )
}