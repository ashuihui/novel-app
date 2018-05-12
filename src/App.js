//组装

import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { fetchTotalRank } from './redux/action';

class App extends Component {
    componentDidMount() {
        this.props.fetchTotalRank(0);
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