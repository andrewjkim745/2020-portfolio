import React from 'react'



export default class SideBackdrop extends React.Component {
  render(){
    return(
      <div onClick={this.props.close} className="backdrop" />
    )
  }
}