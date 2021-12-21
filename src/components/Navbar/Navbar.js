import React, { useState } from 'react'
import './Navbar.scss'
import { Modal } from '../Shared/modal'
import { NavLink } from 'react-router-dom'
import SideDrawer from '../SideDrawer/SideDrawer'
import SideBackdrop  from '../SideDrawer/SideBackdrop'


export default function Navbar () {
    const [ hovered, setHovered ] = useState(false)
    const [ modal, setModal ] = useState(false)
    const [ changed , setColor ] = useState(false)
    

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
                <NavLink exact to='/'>
                </NavLink>
                <div  class='navbar-item'>
                </div>
                <a onClick={() => setModal(true)} role="button" class="navbar-burger has-text-white" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <SideDrawer modal={modal}/>
                {backdrop()}
            </div>
            <div class='navbar-menu'>
            <div class='navbar-end'>
                <div class="navbar-item ">
                    <NavLink exact to='/'>
                    <h1 class='is-size-4 button mx-3'>
                        Home
                    </h1>
                    </NavLink>
                    <NavLink exact to='/contact'>
                        <h1 class='is-size-4 button mx-3'>Contact</h1>
                    </NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}