import React from 'react'
import { Link } from 'react-router-dom'

// Footer element which includes the bottom 3 links
class FormFooter extends React.Component{
    render(){
        return(
                <div className="footer">
                    <Link className="forgot" to="/api/login/error">Forgot you password</Link>
                    <div className="sentence">
                        <p className="question">Don't have an account?</p>
                        <Link className="signup" to="/api/login/error">Sign Up</Link>
                    </div>
                    <Link className="resend" to="/api/login/error">Resend email confirmation</Link>
                </div>
        )
    }
}
export default FormFooter