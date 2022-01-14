import React, {useState}from 'react'






export default function Dropdown ({sortA, sortO, sortL}) {

    const [hovered, setHovered ] = useState()
    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Sort</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <div onClick={sortA} onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>setHovered(false)} class={hovered ? 'dropdown-item is-active' : 'dropdown-item'}>
                        <p>Alphabetically</p>
                    </div>
                    <hr class="dropdown-divider"/>

                    <div onClick={sortO}class="dropdown-item">
                        <p>By Oldest</p>
                    </div>
                    <hr class="dropdown-divider"/>

                    <div onClick={sortL}class="dropdown-item">
                        <p>By Latest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

