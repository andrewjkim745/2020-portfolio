import React from 'react'
import { Column } from './Columns/Column'






export const About = () => {
    return (
        <section class='is-medium is-danger has-text-centered is-long'>
            <div class='container'>
                <div class='columns is-centered'>
                    <Column
                    columnSize={'column is-three-fifths'}
                    
                    />
                </div>
            </div>
        </section>
    )
}