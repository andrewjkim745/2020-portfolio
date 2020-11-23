import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'


export const ProjectColumns = () => {
    
    return (
        <div class='columns'>
            {languageArray.map(language => {
                return (
                    <Column>
                    <img src={language.image}/>
                    <p class='title'>{language.name}</p>
                    </Column>
                )
            })}
        </div>
    )
}