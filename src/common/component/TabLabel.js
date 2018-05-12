import React,{Component} from 'react';
import {Text} from 'react-native';
import px2dp from '../styles/px2dp';

export default class TabLabel extends Component {
    render() {
        return(
            <Text
                style={ {
                    color:this.props.tintColor,
                    textAlign:'center',
                    fontSize: this.props.type!=='1'? px2dp(16):px2dp(20),
                    fontWeight:this.props.focused ? 'bold':'normal'
                }}>
                {this.props.title}
            </Text>

        )
    }
};


