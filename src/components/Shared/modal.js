import React from 'react'
import { Title } from '../Shared/Title/Title'




export const Modal = ({ className}) => {
    <>
    <div class={className}>
        <div class='modal-background'>
            <div class='modal-content'>
                <div class='container is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                    <Title
                    title='About'
                    />
                    <Title
                    title='Portfolio'
                    />
                    <Title
                    title='Resume'
                    />
                    <Title
                    title='Contact'
                    />
                </div>
            </div>
        </div>
    </div>
    </>
}