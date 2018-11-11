import React, { Component, Fragment } from 'react';

import { Header, Footer } from '../Layouts';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                    <img width='100%' src='https://scontent-gru2-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/46053355_302940987208271_1899047861832646656_n.png?_nc_cat=102&_nc_ht=scontent-gru2-1.xx&oh=7fd0cd3b47646636c21774186c3ef18d&oe=5C874D5B' alt="data"></img>
                 <Footer
                 />
             </Fragment>
        )
    }
}