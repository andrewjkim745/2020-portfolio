import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'
import { HeroTitle } from '../Shared/Title/Title'
import { CardImage } from '../Shared/CardImage'


export const ProjectColumns = () => {
    
    return (
        <div class='is-flex-direction-column is-justify-content-center p-5'>
            <p class='title is-size-1 is-size-4-mobile has-text-centered'>Languages/Frameworks Learned</p>
        <div class='columns is-multiline'>
            {languageArray.map(language => {
                return ( 
                    <Column columnSize='column is-one-third'>
                        <CardImage
                        image={language.image}
                        name={language.name}
                        />
                    </Column>
                )
            })}
        </div>
        </div>
    )
}