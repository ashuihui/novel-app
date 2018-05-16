import { StyleSheet } from 'react-native';
import color from '../../../common/styles/color';
import px2dp from '../../../common/styles/px2dp';
import px2dpW from '../../../common/styles/px2dpW';
const styles = StyleSheet.create({
    card:{
        height:px2dp(300),
        width:px2dpW(345),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:color.backprimary,
    },
    starView:{
        backgroundColor:color.backprimary,
        flex:1,
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'stretch',
        justifyContent:'space-around',
        height:px2dp(50),
        borderWidth:px2dp(1),
        borderStyle:'solid',
        borderColor:color.dividerColor,
        borderRadius:px2dp(4),
        paddingLeft:px2dp(50),
        paddingRight:px2dp(50)
    },
    star:{
        width:px2dp(50),
        height:px2dp(50),
        flexGrow:1,
        flexShrink:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        flex:1,
        width:px2dp(50),
        height:px2dp(50),
    },

    textInput:{
        height:px2dp(200),
        width:px2dpW(345),
        fontSize:px2dp(22),
        backgroundColor:color.primaryColorText,
    },
    button:{
        backgroundColor:color.accentColor,
        borderRadius:px2dp(15),
        color:color.primaryColorText,
        fontSize:px2dp(22),
        height:px2dp(50),
    },
});

module.exports = styles;
