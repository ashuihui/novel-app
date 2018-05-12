import { StyleSheet } from 'react-native';
import color from './color';
import px2dp from './px2dp';
const styles = StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButtomView:{
        margin: 0,
        display:'flex',
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent:'space-around'

    },
    novelCard:{
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent:'space-around',
        height:px2dp(20),
        flexBasis:px2dp(100),
    },
    novelCardText:{
        padding: 10,
        fontSize: 18,
        height: 44,
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
