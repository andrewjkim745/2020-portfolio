import React from 'react'
import { Button, TextField } from '@material-ui/core'
import  DogMove  from '../DogMove'
import  NavBar  from '../Navbar/Navbar'
import emailjs from '@emailjs/browser';







export default class Contact extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            from_name: '',
            from_email: '',
            message_html: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        emailjs.sendForm('service_65a1v3r', 'template_i4mt20m', e.target, "user_r0gnkzwAVyWwIpchjY3RU")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         alert("Email Sent! I will try to get back to you as soon as possible!")
    }



    render() {

        
        return (
            <>
            <NavBar/>
            <div style={{ position: 'relative', top: 50}}class='container p-5'>
                <DogMove/>
                <section class='has-text-centered'>
                    
                    <div class='columns is-centered'>
                        <div class='column is-three-quarters'>
                            <h1 class='is-spaced is-size-2-tablet is-size-3-mobile is-size-1-desktop'>
                                Lets work together! How can I help?
                            </h1>
                        </div>
                    </div>
                </section>
                <section>
                <div class='container'>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                <div class='columns is-centered'>
                    <div class='column is-half'>
                        <div>
                        <TextField onChange={this.handleChange} name='from_name' label='Name' id='standard-basic' />
                        </div>
                    </div>
                    <div class='column is-half'>
                        <TextField onChange={this.handleChange} name='from_email' label='Email' id='standard-basic' />
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column'>
                        <div class='field'>
                            <div class="control">
                                <textarea onChange={this.handleChange} name='message_html' class="textarea" placeholder="Please write your message here"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='columns is-centered'>
                    <div class='column is-one-third'>
                        <div class='is-flex is-justify-content-center'>
                        <Button type='submit' color='secondary' variant='contained'>
                            <h1>Submit</h1>
                        </Button>
                        </div>
                    </div>
                </div>
                </form>
                </div>
                
                </section>
                
            </div>
            </>
        )
    }
}