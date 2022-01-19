import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SideDrawer from '../SideDrawer/SideDrawer'
import SideBackdrop from '../SideDrawer/SideBackdrop'


export default function Navbar() {
    const [modal, setModal] = useState(false)

    const backdrop = () => {
        if (modal) {
            return (
                <SideBackdrop close={() => setModal(false)} />
            )
        }
    }

    return (

        <div style={{ position: 'fixed' }} class='navbar navTransparent' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <NavLink exact to='/'>
                </NavLink>
                <div class='navbar-item'>
                </div>
                <a onClick={() => setModal(true)} role="button" style={{ display: 'unset' }} class="is-size-1 navbar-burger has-text-primary" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <SideDrawer onClick={() => setModal(false)} modal={modal} />
                {backdrop()}
            </div>
        </div>
    )
}