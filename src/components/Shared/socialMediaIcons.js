import React from 'react' 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';



export const SocialMediaIcons = () => {
    return (
        <div class='is-flex'>
            <a class='button is-medium is-rounded mx-1 transparent'>
                <LinkedInIcon
                fontSize='large'
                color='primary'
                />
            </a>
            <a class='button is-medium is-rounded mx-1 transparent'>
            <GitHubIcon
            fontSize='large'
            color='primary'
            />
            </a>
            <a class='button is-medium is-rounded mx-1 transparent'> 
            <MailIcon
            fontSize='large'
            color='primary'
            />
            </a>
        </div>
    )
}