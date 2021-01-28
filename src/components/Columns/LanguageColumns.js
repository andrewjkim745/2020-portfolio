import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'
import AnimatedCard from '../Shared/animatedCard'

export default function LanguageColumns() {

    return (
        <div style={{ backgroundColor:'lightgoldenrodyellow' }} class='is-flex-direction-column is-justify-content-center p10'>
            <p class='title is-size-2 is-size-6-mobile has-text-centered'>Languages/Frameworks Learned</p>
        <div class='columns is-multiline my-6'>
            {languageArray.map(language => {
            return (
            <Column columnSize='column is-one-quarter'>
                <AnimatedCard
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