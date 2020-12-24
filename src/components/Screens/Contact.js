import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { Title } from '../Shared/Title'







export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }



    render() {
        return (
            <div class='container'>
                <div class='container has-text-centered'>
                    <div class='columns'>
                        <div class='column is-three-quarters'>

                        </div>
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column is-half'>
                        <TextField label='Name' id='standard-basic' />
                    </div>
                    <div class='column is-half'>
                        <TextField label='Email' id='standard-basic' />
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column'>
                        <div class='field'>
                            <label class='label'>Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Please write your message here"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column is-one-third'>
                        <Button color='secondary' variant='contained'>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}