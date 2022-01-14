import React from 'react'






export const Dropdown = ({sortA, sortE, sortL}) => {
    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Sort</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <div onClick={sortA}class="dropdown-item">
                        <p>Alphabetically</p>
                    </div>
                    <div onClick={sortE}class="dropdown-item">
                        <p>By Earliest</p>
                    </div>
                    <div onClick={sortL}class="dropdown-item">
                        <p>By Latest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

