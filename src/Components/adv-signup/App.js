import React, { Component, Fragment } from 'react';

import { Header, Footer } from '../Layouts';
import AdvSignup from './adv-signup';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <AdvSignup/>
                 <Footer
                 />
             </Fragment>
        )
    }
}