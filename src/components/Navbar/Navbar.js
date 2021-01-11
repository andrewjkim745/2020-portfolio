import React, { useState } from 'react'
import './Navbar.scss'
import { Modal } from '../Shared/modal'
import { NavLink } from 'react-router-dom'



export default function Navbar () {
    const [ hovered, setHovered ] = useState(false)
    const [ modal, setModal ] = useState(false)
    

    function toggleHover() {
        setHovered(true)
        setTimeout(() => {
            setHovered(false)
        }, 500)
    }

    const renderModal = () => {
        return (
            <>
            <Modal
            className={modal ? 'modal is-active' : 'modal'}
            // sideDrawerClass={modal ? 'sideDrawer open ': 'sideDrawer has-background-white '}
            sideDrawerClass={modal ? 'sideDrawer open has-background-white' : 'sideDrawer has-background-white'}
            onClick={() => setModal(false)}
            />
            </>  
        )
    }



    return (
        <div class='navbar' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <NavLink exact to='/'>
                <div onClick={toggleHover} class={hovered ? 'navbar-item rotateLogo' : 'navbar-item'}>
                    <p class='has-text-black is-size-1 is-size-4-mobile'>❈</p>
                </div>
                </NavLink>
                <div  class='navbar-item'>
                <p onMouseEnter={toggleHover} class={hovered ? 'has-text-black is-size-1 is-size-4-mobile rotateLogo' : 'has-text-black is-size-1 is-size-4-mobile'}>AJK</p>
                </div>
                <a onClick={() => setModal(true)} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                {renderModal()}
            </div>
            <div class='navbar-menu'>
            <div class='navbar-end'>
                <div class="navbar-item ">
                    <a onClick={() => console.log('clicked')} class='button mx-1'>
                        About
                    </a>
                    <a class="button mx-1">
                        Portfolio
                     </a>
                    <a class='button mx-1'>
                        Resume
                    </a>
                    <NavLink exact to='/contact' class='button mx-1'>
                        Contact
                    </NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}