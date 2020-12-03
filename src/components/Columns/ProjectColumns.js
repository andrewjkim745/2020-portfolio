import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'
import { HeroTitle } from '../Shared/Title/HeroTitle'
import { CardImage } from '../Shared/CardImage'


export const ProjectColumns = () => {
    
    return (
        <div style={{ backgroundColor:'lightgoldenrodyellow' }}class='is-flex-direction-column is-justify-content-center p-5'>
            <p class='title is-size-1 is-size-4-mobile has-text-centered'>Languages/Frameworks Learned</p>
        <div class='columns is-multiline'>
            {languageArray.map(language => {
                return ( 
                    <Column columnSize='column is-one-quarter'>
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