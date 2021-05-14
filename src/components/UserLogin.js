import React from 'react'


const UserLogin = (props) => {
    return (
        <div>
            {props.email && <p>{props.email}</p>}
            {props.password && <p>{props.password}</p>}
            {props.remember && <p>{props.remember}</p>}
        </div>
    )
}
export default UserLogin