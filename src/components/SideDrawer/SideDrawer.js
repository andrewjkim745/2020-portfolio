import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export default function SlideDrawer(props) {


       let drawerClasses = 'side-drawer'
       if (props.modal) {
          drawerClasses = 'side-drawer open'
       }

       const [ hovered, setHovered ] = useState(false)


       return(
          <div className={drawerClasses}>
               <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                  <AccountCircleIcon
                  fontSize='large'
                  />
                  <p class='is-size-4'>About</p>
               </div>
               <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                  <LaptopChromebookIcon
                  fontSize='large'
                  />
                  <p class='is-size-4'>Portfolio</p>
               </div>
               <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                  <AssignmentIndIcon
                  fontSize='large'
                  />
                  <p class='is-size-4'>Resume</p>
               </div>
               <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                  <ContactPhoneIcon
                  fontSize='large'
                  />
                  <p class='is-size-4'>Contact</p>
               </div>  
          </div>
      )   
}