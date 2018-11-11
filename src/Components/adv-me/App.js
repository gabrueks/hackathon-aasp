import React, { Component, Fragment } from 'react';

import PieChart from './Chart';
import { Header, Footer } from '../Layouts';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                {/* <PieChart/> */}
                 <Footer
                 />
             </Fragment>
        )
    }
}