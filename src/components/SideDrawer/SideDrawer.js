import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { sdData } from '../../assets/sdData'
import Icon from '@material-ui/core/Icon'
import { Redirect } from 'react-router-dom'

export default function SlideDrawer(props) {


       let drawerClasses = 'side-drawer'
       if (props.modal) {
          drawerClasses = 'side-drawer open'
       }

       const [ hovered, setHovered ] = useState(false)

       const history = useHistory();
      const routeChange = (item) => {
         history.push(item.path)
      }

       const sideDrawerContent = () => {
          return (
             <>
             {sdData.map(item => {
                return (
                <div onClick={()=> history.push(item.path)} class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                   <Icon>{item.image}</Icon>
                   <a href={item.name === 'Contact' ? '': `#${item.name}`} onClick={props.onClick} class='is-size-3-desktop is-size-6-mobile'>{item.name}</a>
                </div>
                )
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