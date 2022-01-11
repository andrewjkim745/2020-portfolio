import React, { useState } from 'react'
import './Navbar.css'
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
                <a onClick={() => setModal(true)} role="button" style={{display:'unset'}}class="navbar-burger has-text-danger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <SideDrawer onClick={()=>setModal(false)} modal={modal}/>
                {backdrop()}
            </div>
        </div>
    )
}