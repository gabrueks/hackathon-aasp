import React, { Component, Fragment } from 'react';

// import PieChart from './Chart';
import { Header, Footer } from '../Layouts';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                    <img width='100%' src='https://scontent-gru2-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/45874825_2121973708053118_8444883990111846400_n.png?_nc_cat=107&_nc_ht=scontent-gru2-1.xx&oh=7fa3018aeb9967166c397772d69e1714&oe=5C704B51' alt="data"></img>
                 <Footer
                 />
             </Fragment>
        )
    }
}