import React, { Component, Fragment } from 'react';

import Stepper from './stepper';
import { Header, Footer } from '../Layouts';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Stepper/>
                 <Footer
                 />
             </Fragment>
        )
    }
}