import React from 'react'




export default function SlideDrawer() {


       let drawerClasses = 'side-drawer'
       if (props.show) {
          drawerClasses = 'side-drawer open'
       }
       return(
          <div className={drawerClasses}>
             <h1>Hello, I'm sliding!</h1>
          </div>
      )   
}