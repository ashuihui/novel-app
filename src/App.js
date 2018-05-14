//组装

import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import {
    fetchTotalRank ,
    fetchNewRank,
    fetchBookShelf,
    isLogin,
} from './redux/action';

class App extends Component {
    componentDidMount() {
        this.props.fetchTotalRank(0);
        this.props.fetchNewRank(10);
        this.props.fetchBookShelf(20);
        this.props.isLogin();
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
    isLogin,
})(App)