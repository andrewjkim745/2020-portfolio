import React from 'react'




export default function SlideDrawer(props) {


       let drawerClasses = 'side-drawer'
       if (props.modal) {
          drawerClasses = 'side-drawer open'
       }
       return(
          <div className={drawerClasses}>
             <h1>Hello, I'm sliding!</h1>
          </div>
      )   
}