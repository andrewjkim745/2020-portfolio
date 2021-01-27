import React from 'react' 
import AnnoyingDog from '../assets/annoyingDog.gif'
import { SocialMediaIcons } from '../components/Shared/socialMediaIcons'
import { CopyRight } from '../components/Shared/CopyRight'



export const Footer = () => {
    return (
        <footer class='section is-primary is-small has-text-centered has-background-dark'>
            <div class='container is-narrow is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
                <img class='image is-128x128'src={AnnoyingDog}/>
                <div class='columns is-centered'>
                    <div class='column'>
                    <p class='title is-size-4 has-text-weight-light has-text-white'>Learning & internalizing new things everyday</p>
                    <p class='subtitle is-size-5 has-text-weight-light has-text-white'>One Step At A Time</p>
                    </div>
                </div>
                <SocialMediaIcons/>
                <CopyRight/>
            </div>
        </footer>
    )
}