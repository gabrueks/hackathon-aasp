import React, { Component, Fragment } from 'react';

import AdvList from './adv-list';
import { Header, Footer } from '../Layouts';

export default class extends Component {

    styles = {
        overflowX: 'scroll'
    };

    render() {
        return (
            <div style={this.styles}>
                <Fragment>
                    <Header/>
                    <AdvList/>
                    <Footer
                    />
                </Fragment>
            </div>
        )
    }
}