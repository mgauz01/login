import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class FormFooter extends React.Component{

    render(){
        return(
            <div className="login-footer">
                <NavLink to="/error">Forgot you password?</NavLink>
                <NavLink to="/error">Sign Up</NavLink>
                <NavLink to="/error">Resend email confirmation</NavLink>
            </div>
        )
    }
}

export default FormFooter