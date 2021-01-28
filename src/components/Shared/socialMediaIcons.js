import React from 'react' 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';



export const SocialMediaIcons = () => {
    return (
        <div class='is-flex'>
            <a href='https://www.linkedin.com/in/andrew-kim-0705/' class='button is-medium is-rounded mx-1 transparent'>
                <LinkedInIcon
                fontSize='large'
                color='primary'
                />
            </a>
            <a  href='https://github.com/andrewjkim745' class='button is-medium is-rounded mx-1 transparent'>
            <GitHubIcon
            fontSize='large'
            color='primary'
            />
            </a>
            <a href='mailto:andrewk745@gmail.com?subject=Business proposal' class='button is-medium is-rounded mx-1 transparent'> 
            <MailIcon
            fontSize='large'
            color='primary'
            />
            </a>
        </div>
    )
}