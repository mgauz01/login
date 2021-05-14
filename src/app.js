import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Form from './components/Form'
import Router from './Router/Router'
import { Route } from 'react-router'

ReactDOM.render(<Router/>, document.getElementById("root"));