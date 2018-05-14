import { StyleSheet } from 'react-native';
import color from '../../../common/styles/color';
import px2dp from '../../../common/styles/px2dp';
import px2dpW from '../../../common/styles/px2dpW';


const styles = StyleSheet.create({

    index:{
        flex:1,
        backgroundColor:color.backprimary,
        padding:px2dp(10),
        flexDirection:'column',
        justifyContent:'center',
    },
    titleView:{
        flex:1,
        height:px2dp(500),
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    title:{
        flex:1,
        height:px2dp(500),
        lineHeight:px2dp(500),
        paddingBottom:px2dp(20),
        textAlign:'center',
        fontSize:px2dp(30),
        fontWeight:'bold',
        color:color.primaryColor
    },
});

module.exports = styles;