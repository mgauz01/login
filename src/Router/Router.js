import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Form from '../components/Form'

// Component which routes all th epaths in the application
// TO serve various components when a route is activated
class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Form} exact={true}/>
                    <Route path="/api/login/:id" component={Error}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router