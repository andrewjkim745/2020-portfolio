import React from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import  Navbar  from './Navbar/Navbar'
import { Backdrop } from './Backdrop/Backdrop'
import { HeroTitle } from './Shared/Title/HeroTitle'
import LanguageColumns from './Columns/LanguageColumns'
import  ProjectColumns from './Columns/ProjectColumns'
import { About } from './About'
import { Interested } from '../components/Shared/Interested'
import { Footer } from './Footer'
import  Contact from './Screens/Contact'
import Aos from 'aos'


export default class Container extends React.Component {

    static contextType = ThemeContext

    render() {
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark

        return (
            // <div style={{position: 'relative', height: '100vh'}}>
            <>
            <Navbar/>
                <Backdrop />
                <HeroTitle
                    title='Full Stack Developer, and'
                    color='white'
                    fontFamily= 'Roboto Slab'
                />
                <About/> 
                <LanguageColumns/>
                <ProjectColumns/>
                <Interested/>
                <Footer/>
                {/* <Contact/> */}
                </>
            // {/* // </div> */}
        )
    }
}