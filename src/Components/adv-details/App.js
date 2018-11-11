import React, { Component, Fragment } from 'react';

import AdvDetails from './adv-details';
import { Header, Footer } from '../Layouts';

export default class extends Component {


    render() {
        return (
            <Fragment>
                <Header/>
                <div>
                    <AdvDetails/>
                </div>
                 <Footer
                 />
             </Fragment>
        )
    }
}