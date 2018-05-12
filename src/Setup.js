//state提供：provide

import React, { Component } from 'react';
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

class Setup extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default  Setup;