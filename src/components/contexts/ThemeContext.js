import React, { createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {

    state = {
        isLightTheme: true,
        light: { color: 'white', },
        dark: { color: 'black' }
    }

    render() {
        return (
            <ThemeContext 
            value={{...this.state}}
            >
                {this.props.children}
            </ThemeContext>

        )
    }

}