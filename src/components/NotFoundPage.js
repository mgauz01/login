import {Link} from 'react-router-dom'
import React from 'react'

// A component that is mean tto serve as a trivial 
// destination after the form is submitted
const NotFoundPage = () => (
    <div>
        404! -- <Link to="/">Go Home</Link>
    </div>
)

export default NotFoundPage