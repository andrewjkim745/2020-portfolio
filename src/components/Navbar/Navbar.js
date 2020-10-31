import React from 'react'



export const Navbar = () => {
    return (
        <div class='navbar' role="navigation" aria-label="main navigation">
            <div class='navbar-brand'>
                <div class='navbar-item'>
                    <p style={{ fontSize: 200 }}>❈</p>
                    <p>AJK</p>
                </div>
                <div class='navbar-end'>
                    <div class="navbar-item">
                        <a class='button is-primary'>
                            <strong>About</strong>
                        </a>
                        <a class="button is-light">
                            Portfolio
                         </a>
                         <a class='button is-light'>
                             Resume
                         </a>
                        <a>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}