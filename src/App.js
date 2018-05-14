//组装

import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import {
    fetchTotalRank ,
    fetchNewRank,
    fetchBookShelf,
} from './redux/action';

class App extends Component {
    componentDidMount() {
        this.props.fetchTotalRank(0);
        this.props.fetchNewRank(10);
        this.props.fetchBookShelf(20);
    }

    render() {
        return (
            <Main />
        )
    }
}

export default connect(null, {
    fetchTotalRank,
    fetchNewRank,
    fetchBookShelf,
})(App)