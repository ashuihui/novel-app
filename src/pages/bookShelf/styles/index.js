import { StyleSheet } from 'react-native';
import color from '../../../common/styles/color';
import px2dp from '../../../common/styles/px2dp';
const styles = StyleSheet.create({
    index:{
        flexGrow:1
    },
    wait:{
        zIndex:5,
        flex:10,
        height:px2dp(812),
        backgroundColor:color.backprimary,
    }
});

module.exports = styles;
