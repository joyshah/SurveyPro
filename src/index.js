import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginComponent from './login/loginMain'
import SignUpComponent from './signup/signUpMain'
import DynamicMain from './DynamicForm/dynamicMain'
import Dashboard from './ClientDashboard/Dashboard/Dashboard'

// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


ReactDOM.render(
    <div>
        <a href="/"><div className='mainHead'>Survey Pro</div></a>
<Router>
    <Route exact path = "/" component = {App} />
    <Route exact path = "/client/dashboard" component = {Dashboard} />
    <Route exact path = "/login" component = {LoginComponent} />
    <Route path = "/signup" component = {SignUpComponent} />
    <Route path = "/dynamic" component = {DynamicMain} />
</Router>
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
