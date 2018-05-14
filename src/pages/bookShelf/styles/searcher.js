import { StyleSheet } from 'react-native';
import color from '../../../common/styles/color';
import px2dp from '../../../common/styles/px2dp';
const styles = StyleSheet.create({
    card:{
        height:px2dp(60),
        backgroundColor:color.primaryColor,
        flexDirection:'row',
        flexWrap:'nowrap',
        justifyContent:'center',
        alignItems:'center',
        padding: px2dp(5),
    },
    textInput:{
        padding: 0,
        flexGrow:4,
        flexShrink:4,
        width:px2dp(325),
        height:px2dp(50),
        fontSize: px2dp(22),
        backgroundColor:color.primaryColorText
    },
    imgView:{
        flexGrow:1,
        flexShrink:1,
        width:px2dp(40),
        height:px2dp(40)
    },
    img:{
        flex:1,
        width:px2dp(40),
        height:px2dp(40)
    },

});

module.exports = styles;
