import React from 'react'
import FormHeader from './FormHeader'
import FormFooter from './FormFooter'

class Form extends React.Component{

    render(){
        return(
            <div className="login-box">
               <FormHeader/> 
               <div className="email">
                    <h3>Email</h3>
                    <input type="text" placeholder="Email"/>
               </div>

               <div className="password">
                    <h3>Password</h3>
                    <input type="password" placeholder="Password"/>
               </div>
                <div className="remember-me">
                    <input type="checkbox" name="remember-me" id="remember-me"/>
                    <label htmlFor="remember-me" onClick={console.log("Hello")}>Remember Me</label>
                </div>
                <button className="button">Sign In</button>
                {/* <FormFooter/> */}
            </div>
        )
    }
}

export default Form