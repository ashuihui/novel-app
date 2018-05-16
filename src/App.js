//组装

import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import {
    fetchTotalRank ,
    fetchNewRank,
    isLogin,
    fetCommentsFlow,
} from './redux/action';
import storage from './util/storage';

class App extends Component {
    asyncAction=async ()=>{
        try{
            const localToken = await storage.getToken();
            this.props.isLogin(localToken);
        }catch (e) {
            console.log(e);
        }
    }
    componentDidMount() {
        this.props.fetchTotalRank(0);
        this.props.fetchNewRank(10);
        this.props.fetCommentsFlow(0);
        this.asyncAction();
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
    isLogin,
   fetCommentsFlow
})(App)