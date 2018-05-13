import React,{Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import px2dp from '../styles/px2dp';
import color from '../styles/color';

export default class HeaderTop extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.center}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    center:{
        flex:1,
        textAlign:'center',
        color:color.primaryColorText,
        lineHeight:px2dp(50),
        fontSize:px2dp(20),
        fontWeight:'bold'
    },
    header:{
        height:px2dp(50),
        backgroundColor: color.primaryColor,
    },
});