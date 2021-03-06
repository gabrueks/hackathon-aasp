import React from 'react';
import ReactDOM from 'react-dom';
import AppAdv from './Components/home-adv/App';
// import AppClient from './Components/home-cli/App';
import AdvSignup from './Components/adv-signup/App';
import AppHome from './Components/adv-me/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={AppAdv} />
            <Route path="/me" exact component={AppHome} />
            <Route path="/signup" exact component={AdvSignup} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
