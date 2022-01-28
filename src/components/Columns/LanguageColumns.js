import React from 'react' 
import { Column } from './Column'
import { languageArray }from '../../assets/data'
import AnimatedCard from '../Shared/animatedCard'

export default function LanguageColumns() {


    
    return (
        <div data-aos='slide-right' data-aos-once='true' style={{ backgroundColor:'white' }} class='is-flex-direction-column is-justify-content-center p10'>
            <h1 class='title is-size-6-mobile has-text-centered has-text-weight-light'>Languages/Frameworks Learned</h1>
        <div class='columns is-multiline my-6'>
            {languageArray.map(language => {
            return (
            <Column columnSize='column is-one-quarter'>
                <div class='card'>
                    <div class='card-image'>
                        <figure class='image is-1by1'>
                        <img src={language.image}/>
                        </figure>
                    </div>
                    <div class='content is-flex is-justify-content-center'>
                        <h1 class='has-text-weight-light'>{language.name}</h1>
                    </div>
                </div>
            </Column>
            )
            })}

        </div>
        </div>
    )
}