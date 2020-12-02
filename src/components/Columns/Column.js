import React from 'react'




export const Column = (props) => {
    return (
        <div class={props.columnSize}>
            {props.children}
        </div>
    )
}