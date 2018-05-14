import { StyleSheet } from 'react-native';
import color from '../../../common/styles/color';
import px2dp from '../../../common/styles/px2dp';
import px2dpW from '../../../common/styles/px2dpW';


const styles = StyleSheet.create({

    index:{
        backgroundColor:color.backprimary,
        padding:px2dp(10),
        flexGrow:1,
        flexDirection:'column',
        justifyContent:'center'

    },
    item:{
        height:px2dp(80),
        paddingBottom:px2dp(20),
        width:px2dpW(375)-px2dp(10)*2,
    },
    textInput:{
        padding: 0,
        paddingLeft:px2dpW(10),
        flex:1,
        fontSize: px2dp(24),
        backgroundColor:color.primaryColorText,
        borderColor:color.dividerColor,
        borderWidth:px2dp(2),
        borderRadius:px2dp(10),
    },

});

module.exports = styles;