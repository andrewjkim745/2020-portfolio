import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'


export const ProjectColumns = () => {
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div class='columns is-multiline is-gapless'>
            {languageArray.map(language => {
                return (
                    // <div>
                    <Column columnSize='column is-one-third'>
                    <img src={language.image}/>
                    <p class='title'>{language.name}</p>
                    </Column>
                    // </div>
                )
            })}
        </div>
        </div>
    )
}