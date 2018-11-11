import React from 'react';
import ReactDOM from 'react-dom';
import AppAdv from './Components/home-adv/App';
import AppClient from './Components/home-cli/App';
import AppAdvDetails from './Components/adv-details/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={AppAdv} />
            <Route path="/client" exact component={AppClient} />
            <Route path="/client/:id" exact component={AppAdvDetails} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
