//组装

import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { fetchTotalRank } from './redux/action';

class App extends Component {
    componentDidMount() {
        const apiUrl='http://118.89.32.47:7280/rank?num=0';
        this.props.fetchTotalRank(apiUrl);
    }

    render() {
        return (
            <Main />
        )
    }
}

export default connect(null, {
    fetchTotalRank,
})(App)