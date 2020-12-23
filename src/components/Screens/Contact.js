import React from 'react'
import { Button, TextField } from '@material-ui/core'







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

                    </div>
                </div>
            </div>
        )
    }
}