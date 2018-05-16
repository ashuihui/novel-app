import React,{Component} from 'react';
import {Text,View,Image,StyleSheet,} from 'react-native';
import px2dp from '../styles/px2dp';
import color from '../styles/color';

class Card extends Component {
    render() {
        return(
            <View style={styles.card}>
                <View style={styles.imgView}>
                    <Image style={styles.img}  source={{uri:this.props.imgUrl}}/>
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.title}>{this.props.novelName}</Text>
                    <Text style={styles.text}>作者：{this.props.author}</Text>
                    <Text style={styles.text}>字数：{this.props.wordCount}</Text>
                    <Text style={styles.text}>最后更新：{this.props.updateTime}</Text>
                    <Text style={styles.text}>来自：{this.props.beFrom}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:color.backprimary,
        padding:px2dp(16),
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'stretch',
        height:px2dp(155),
    },
    imgView:{
        width:px2dp(90),
        height:px2dp(120),
        flexGrow:1,
        flexShrink:1,
    },
    img:{
        flex:1,
        width:px2dp(90),
        height:px2dp(120),
    },
    infoView:{
        flexGrow:4,
        flexShrink:4,
        justifyContent:'space-between',
        paddingLeft:px2dp(8),
        height:px2dp(120),
        width:px2dp(250),

    },
    title:{
        fontSize:px2dp(20),
        color:color.primaryTextColor,
        height:px2dp(22),
        lineHeight:px2dp(22),
    },
    text:{
        height:px2dp(25),
        width:px2dp(200),
        fontSize:px2dp(16),
        color:color.secondaryTextColor,
    },
});

export default Card;