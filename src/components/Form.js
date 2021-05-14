import React from 'react'
import FormHeader from './FormHeader'

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
        }
        this.props.history.push(`/api/login/${this.state.email}`)

    }

    onPasswordChange = (e) => {
        console.log(e.target.value)
        const pass = e.target.value
        this.setState(() => ({
            password: pass
        }))
    }

    onEmailChange = (e) => {
        console.log(e.target.value)
        const email = e.target.value
        this.setState(() => ({
            email: email
        }))
    }

    onRememberChange = () => {
        console.log(!this.state.remember)
        this.setState(() => ({
            remember: !this.state.remember
        }))

    }

    render(){
        return(
            <div className="login-box">
               <FormHeader/> 

               <form onSubmit={this.onSubmit}>
                   <div className="email">
                        <h3>Email</h3>
                        <input type="text" onChange={this.onEmailChange}/> 
                    </div>

                    <div className="password">
                        <h3>Password</h3>
                        <input type="password" onChange={this.onPasswordChange}/>
                    </div>
                    <div className="remember-me">
                        <input className="boxcheck" type="checkbox" onChange={this.onRememberChange}/>
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <button className="button">Sign In</button>
                </form>
                {this.state.error !== '' && <p>{this.state.error}</p>}
            </div>
    
        )
    }
}

export default Form