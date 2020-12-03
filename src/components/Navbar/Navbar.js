import React from 'react'
import './Navbar.scss'



export const Navbar = () => {
    return (
        <div class='navbar transparent' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <div class='navbar-item'>
                    <p class='has-text-white is-size-1 is-size-4-mobile'>❈</p>
                </div>
                <div class='navbar-item'>
                <p class='has-text-white is-size-1 is-size-4-mobile'>AJK</p>
                </div>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
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