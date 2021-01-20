import React from 'react'
import { Card } from './Card'


export default class CardItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }

    
  
    renderDescription = () => {
      if (this.state.hover) {
        return (
          <div className='description wh100 is-flex is-flex-direction-column'>
              <p>{this.props.description}</p>
              <div class='is-flex  is-justify-content-center is-align-items-center wh100'>
              <div class={this.state.hover ? 'lightOpacity hoverCard' : 'lightOpacityHide'}>
                  {this.props.children}
                </div>
              </div>
          </div>
        );
      }
    };
  
    render() {
      return (
        <Card
          image={this.props.image}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
          renderVotesRatings={this.renderDescription()}
        />
      );
    }
  }