import React from 'react'
import { Route } from 'react-router-dom'
import Container from '../Container'
import Contact from '../Screens/Contact'





export const Routes = () => {
    return (
        <>
        <Route exact path='/'
        component={Container}
        />
        <Route exact path='/contact'
        component={Contact}/>
        </>
        
    )
}