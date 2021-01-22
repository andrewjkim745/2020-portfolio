import React from 'react'
import { Card } from './Card'
import { Spring } from 'react-spring/renderprops';
import {Transition} from 'react-spring/renderprops'
import Button from '../button'

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
             
              <div class='is-flex  is-justify-content-center is-align-items-center wh100'>
            <Spring
            from={{opacity: 0}}
            to={{opacity: .8}}
            >
            {props => (
                <div class='springContainer' style={props}>
                    <div class='hoverCard'>
                    <p class='has-text-white has-text-weight-bold'>{this.props.description}</p>
                    <div class='is-flex is-flex-direction-column'>
                        <div class='is-flex'>
                        {this.props.children}
                        </div>
                        <Button
                        color={this.props.color}
                        title={this.props.title}
                        repo={this.props.repo}
                        />

                    </div>
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