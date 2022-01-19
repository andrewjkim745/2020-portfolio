import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { sdData } from '../../assets/sdData'
import Icon from '@material-ui/core/Icon'

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
                <div onClick={()=> history.push(item.path)} style={{cursor: 'pointer'}} class='fullW is-flex is-justify-content-space-evenly is-align-items-center'>
                   <Icon fontSize='Medium'>{item.image}</Icon>
                   <a href={item.name === 'Contact' ? '': `#${item.name}`} onClick={props.onClick} class='is-size-3-desktop is-size-6-mobile has-text-black has-text-weight-light'>{item.name}</a>
                </div>
                )
             })}
             </>
          )
       }

       return(
          <div className={drawerClasses}>
             {sideDrawerContent()}
          </div>
      )   
}