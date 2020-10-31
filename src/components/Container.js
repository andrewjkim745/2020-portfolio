import React from 'react' 
import { ThemeContext } from './contexts/ThemeContext'
import { Navbar } from './Navbar/Navbar'




export default class Container extends React.Component {

    static contextType = ThemeContext
   
    render() { 
        console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark

        return (
        <div class='container' 
        style={{ backgroundColor: theme.color }}
        >
        <Navbar/>
        </div>
        )
    }
    
}