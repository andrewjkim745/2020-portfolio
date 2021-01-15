import React from 'react'
import Card from './Card'


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
          <div className='description is-flex is-flex-direction-column'>
              <p>{this.props.description}</p>
              <div class='is-flex'>
                  {this.props.children}
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