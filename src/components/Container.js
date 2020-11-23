import React from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { Navbar } from './Navbar/Navbar'
import { Backdrop } from './Backdrop/Backdrop'
import { HeroTitle } from './Shared/Title/Title'
import { ProjectColumns } from './Columns/ProjectColumns'



export default class Container extends React.Component {

    static contextType = ThemeContext

    render() {
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark

        return (
            <div style={{position: 'relative', height: '100vh'}}>
                <Backdrop />
                <HeroTitle
                    title='Hi my name is Andrew Kim and I am a FullStack/Web Developer with a strong motivation to learn and improve myself everyday'
                    color='white'
                    fontFamily= 'Roboto Slab'
                />
                <ProjectColumns/>
            </div>
        )
    }
}