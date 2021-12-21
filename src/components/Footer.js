import React from 'react' 
import AnnoyingDog from '../assets/annoyingDog.gif'
import { SocialMediaIcons } from '../components/Shared/socialMediaIcons'
import { CopyRight } from '../components/Shared/CopyRight'



export const Footer = () => {
    return (
        <footer class='section is-primary is-small has-text-centered has-background-dark'>
            <div class='container is-narrow is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
                <figure class='image is-128x128 iS'>
                    <img src={AnnoyingDog}/>
                </figure>
                    <h2 class='has-text-weight-light has-text-white'>Learning & internalizing new things everyday</h2>
                    <h2 class='has-text-weight-light has-text-white mb-6'>One Step At A Time</h2>
                <SocialMediaIcons/>
                <CopyRight/>
            </div>
        </footer>
    )
}