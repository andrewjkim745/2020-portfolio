import React from 'react'
import { Title } from '../Shared/Title/Title'




export const Modal = ({ className, onClick }) => {
    return (
    <>
    <div class={className}>
        <div class='modal-background'>
            {/* <div class='modal-content'> */}
                <div class='has-background-white-bis p-6 container is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
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
            {/* </div> */}
        </div>
        <button onClick={onClick} class="modal-close is-large" aria-label="close"></button>
    </div>
    </>
    )
}