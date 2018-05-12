import { StyleSheet } from 'react-native';
import color from './color';
import px2dp from './px2dp';
const styles = StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelStyle:{
        fontSize: px2dp(20),
    },
    tabBottom:{
        height:px2dp(60),
        backgroundColor: color.primaryColorText,
    },
    tabTop:{
        height:px2dp(50),
        backgroundColor: color.primaryColor,
    },
    lineTab:{
        backgroundColor:color.dividerColor,
        borderColor:color.dividerColor,
    }

});

module.exports = styles;
