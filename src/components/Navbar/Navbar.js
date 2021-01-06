import React, { useState} from 'react'
import './Navbar.scss'
import { Modal } from '../Shared/modal'



export default function Navbar () {
    const [ hovered, setHovered ] = useState(false)
    const [ modal, setModal ] = useState(false)
    
    function toggleHover() {
        setHovered(true)
    }

    function toggleModal() {
        setModal(true)
    }

    renderModal = () => {
        return (
            <>
            <Modal
            className={modal ? 'modal is-active' : 'modal'}
            />
            </>
            
        )
    }



    return (
        <div class='navbar transparent' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <div class='navbar-item'>
                    <p class='has-text-white is-size-1 is-size-4-mobile'>❈</p>
                </div>
                <div  class='navbar-item'>
                <p onMouseEnter={toggleHover} class={hovered ? 'has-text-white is-size-1 is-size-4-mobile rotateLogo' : 'has-text-white is-size-1 is-size-4-mobile'}>AJK</p>
                </div>
                <a onClick={toggleModal()} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                {renderModal()}
            </div>
            <div class='navbar-menu'>
            <div class='navbar-end'>
                <div class="navbar-item">
                    <a class='button mx-1'>
                        About
                    </a>
                    <a class="button mx-1">
                        Portfolio
                     </a>
                    <a class='button mx-1'>
                        Resume
                    </a>
                    <a class='button mx-1'>
                        Contact
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}