import React, {useState}from 'react'






export default function Dropdown ({sortA, sortO, sortL}) {

    const [hovered, setHovered ] = useState()
    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Sort</span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <div onClick={sortA} onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>setHovered(false)} class={hovered ? 'dropdown-item is-active' : 'dropdown-item'}>
                        <a>Alphabetically</a>
                    </div>
                    <hr class="dropdown-divider"/>

                    <div onClick={sortO}onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>setHovered(false)} class={hovered ? 'dropdown-item is-active' : 'dropdown-item'}>
                        <a>By Oldest</a>
                    </div>
                    <hr class="dropdown-divider"/>

                    <div onClick={sortL}onMouseEnter={()=> setHovered(true)} onMouseLeave={()=>setHovered(false)} class={hovered ? 'dropdown-item is-active' : 'dropdown-item'}>
                        <a>By Latest</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

