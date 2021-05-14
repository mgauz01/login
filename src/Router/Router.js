import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Form from '../components/Form'
import UserLogin from '../components/UserLogin'

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Form} exact={true}/>
                    <Route path="/error" component={Error}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const Error = () => {
    return (
        <h3>LMAO</h3>
    )
}

export default Router