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
        <div 
        style={{ 
            backgroundColor: theme.color,
            backgroundImage: "url('https://i.imgur.com/gSgNzlZ.jpg')",
            height: '100vh',
            width: '100vw'
         }}
        >
            <Navbar/>
        </div>
        )
    }
    
}