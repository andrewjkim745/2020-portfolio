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
                    // <div>
                    <Column columnSize='column is-one-third'>
                        <CardImage
                        image={language.image}
                        name={language.name}
                        />
                        <div class='content is-flex is-justify-content-center'>
                            <p class='title is-size-2'>{language.name}</p>
                        </div>
                    {/* </div> */}
                    {/* <img src={language.image}/>
                    <p class='title'>{language.name}</p> */}
                    </Column>
                    // </div>
                )
            })}
        </div>
        </div>
    )
}