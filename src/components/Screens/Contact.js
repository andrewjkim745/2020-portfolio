import React from 'react'
import { Button, TextField } from '@material-ui/core'
// import { Title } from '../Shared/Title'
import  DogMove  from '../DogMove'







export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            Name: '',
            Email: '',
            Message: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        // send email with data
    }



    render() {

        
        return (
            <div class='container'>
                <DogMove/>
                <section class='has-text-centered'>
                    {/* <div class='container'> */}
                    <div class='columns is-centered'>
                        <div class='column is-three-quarters'>
                            <h1 class='is-spaced is-size-2-tablet is-size-3-mobile is-size-1-desktop'>
                                Thanks for taking the time to reach out! How can I help you?
                            </h1>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
                <section>
                <div class='container'>
                <div class='columns is-centered'>
                    <div class='column is-half'>
                        <div>
                        <TextField onChange={this.handleChange} label='Name' id='standard-basic' />
                        </div>
                    </div>
                    
                    <div class='column is-half'>
                        <TextField onChange={this.handleChange} label='Email' id='standard-basic' />
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column'>
                        <div class='field'>
                            {/* <label class='label'>Message</label> */}
                            <div class="control">
                                <textarea onChange={this.handleChange} name='Message' class="textarea" placeholder="Please write your message here"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column is-one-third'>
                        <div class='is-flex is-justify-content-center'>
                        <Button onSubmit={this.handleSubmit} color='secondary' variant='contained'>
                            Submit
                        </Button>
                        </div>
                    </div>
                </div>
                </div>
                </section>
            </div>
        )
    }
}