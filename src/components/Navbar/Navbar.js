import React, { useState } from 'react'
import './Navbar.scss'
import { Modal } from '../Shared/modal'
import { NavLink } from 'react-router-dom'
import SideDrawer from '../SideDrawer/SideDrawer'
import SideBackdrop  from '../SideDrawer/SideBackdrop'


export default function Navbar () {
    const [ hovered, setHovered ] = useState(false)
    const [ modal, setModal ] = useState(false)
    

    function toggleHover() {
        setHovered(true)
        setTimeout(() => {
            setHovered(false)
        }, 500)
    }


    const backdrop = () => {
        if (modal) {
            return (
                <SideBackdrop close={()=>setModal(false)}/>
            )
        }
    }


    return (

        <div class='navbar' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <NavLink exact to='/'>
                <div onClick={toggleHover} class={hovered ? 'navbar-item rotateLogo' : 'navbar-item'}>
                    <p class='has-text-black is-size-4 is-size-5-mobile'>❈</p>
                </div>
                </NavLink>
                <div  class='navbar-item'>
                <p class='has-text-black is-size-4 is-size-5-mobile'>AJK</p>
                </div>
                <a onClick={() => setModal(true)} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                {/* {renderModal()} */}
                <SideDrawer modal={modal}/>
                {backdrop()}
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