import React from 'react'
import { Card } from './Card'
import { Spring } from 'react-spring/renderprops';


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
            <Spring
            from={{opacity: 0}}
            to={{opacity: .7}}
            >
            {props => (
                <div class='springContainer' style={props}>
                    <div class='hoverCard'>
                  {this.props.children}
                </div>
                </div>
            )}
            </Spring>
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