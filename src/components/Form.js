import React from 'react'
import FormHeader from './FormHeader'
import FormFooter from './FormFooter'
import PasswordStrengthBar from 'react-password-strength-bar';

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            password: '',
            email: '',
            error: '',
            remember: false
        }
    }
    // Function which chnages redirects the use when everything is submitted
    // Function also raises error when input fields are left blak
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.password || !this.state.email) {
            this.setState(() => ({
                error: 'Please provide password and email'
            }))
        } else {
            this.setState(() => ({
                error: ''
            }))
            this.props.history.push(`/api/login/${this.state.email}`)
        }

    }

    //function to register the change in password input field
    onPasswordChange = (e) => {
        console.log(e.target.value)
        const pass = e.target.value
        this.setState(() => ({
            password: pass
        }))
    }

    // Function to register the change in email input field
    onEmailChange = (e) => {
        console.log(e.target.value)
        const email = e.target.value
        this.setState(() => ({
            email: email
        }))
    }
    // Function to keep track of the state of the checkbox
    onRememberChange = () => {
        console.log(!this.state.remember)
        this.setState(() => ({
            remember: !this.state.remember
        }))

    }
    //Function that renders all th eoutput to the screen
    render(){
        return(
            <div className="login-box">
               <FormHeader/> 

               <form onSubmit={this.onSubmit}>

                   {/* This is the email field */}
                   <div className="email">
                        <h3>Email</h3>
                        <input type="text" onChange={this.onEmailChange}/> 
                    </div>

                    {/* This is the password field */}
                    <div className="password">
                        <h3>Password</h3>
                        <input type="password" onChange={this.onPasswordChange}/>
                        <PasswordStrengthBar className="bar" password={this.state.password}/>
                    </div>

                    {/* This is the checkbox field */}
                    <div className="remember-me">
                        <input className="boxcheck" type="checkbox" onChange={this.onRememberChange}/>
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>

                    <button className="button">Sign In</button>
                </form>
                {/* After the form the error here can either display or not
                dependig on the state of the form */}
                {this.state.error !== '' && <p>{this.state.error}</p>}
                <FormFooter/>
            </div>
    
        )
    }
}

export default Form