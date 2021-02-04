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

        <div style={{ }}class='navbar navTransparent' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <div class='is-flex is-align-items-center'>
                <NavLink exact to='/'>
                <div onClick={toggleHover} class={hovered ? 'navbar-item rotateLogo' : 'navbar-item'}>
                    <p class='has-text-white is-size-1 is-size-1-fullhd  is-size-5-mobile'>❈</p>
                </div>
                </NavLink>
                <div  class='navbar-item'>
                <p class='has-text-white has-text-weight-light is-size-4 is-size-1-fullhd is-size-5-mobile'>AJK</p>
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
            </div>
            <div class='navbar-menu'>
            <div class='navbar-end'>
                <div class="navbar-item ">
                    <NavLink exact to='/'>
                    <a class='is-size-1-fullhd button mx-1'>
                        Home
                    </a>
                    </NavLink>
                    <NavLink exact to='/contact' class='is-size-1-fullhd button mx-1'>
                        Contact
                    </NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}