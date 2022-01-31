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
import AOS from 'aos';
import 'aos/dist/aos.css'


export default class Container extends React.Component {

    static contextType = ThemeContext
    componentDidMount() {
        AOS.init({ duration: 2000 })
    }
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark



        
        return (
            <>
            <Navbar/>
                <Backdrop />
                <HeroTitle
                    title='Andrew J Kim'
                    color='white'
                    fontFamily={'Bebas Neue'}
                />
                <About/> 
                <LanguageColumns/>
                <ProjectColumns/>
                <Interested/>
                <Footer/>
                </>
        )
    }
}