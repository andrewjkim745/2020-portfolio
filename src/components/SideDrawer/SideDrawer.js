import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { sdData } from '../../assets/sdData'

export default function SlideDrawer(props) {


       let drawerClasses = 'side-drawer'
       if (props.modal) {
          drawerClasses = 'side-drawer open'
       }

       const [ hovered, setHovered ] = useState(false)


       const sideDrawerContent = () => {
          return (
             <>
             {sdData.map(item => {
                <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                   {item.image}
                   <p class='is-size-4'>{item.name}</p>
                </div>
             })}
             </>
          )
       }

       return(
          <div className={drawerClasses}>
             {sideDrawerContent()}
               {/* <div class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
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
               </div>   */}
          </div>
      )   
}