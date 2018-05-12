import React,{Component} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import px2dp from '../styles/px2dp';
import color from '../styles/color';

export default class NovelCard extends Component {
    render() {
        console.log(this.props.imgUrl);
        return(
            <View style={styles.card}>
                <Image style={styles.novelImg}
                       source={{uri:this.props.imgUrl}}/>
                <View style={styles.infoView}>
                    <Text style={styles.title}>{this.props.novelName}</Text>
                    <Text style={styles.title}>{this.props.novelName}</Text>
                    <Text style={styles.title}>{this.props.novelName}</Text>
                    <Text style={styles.title}>{this.props.novelName}</Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:color.primaryColorText,
        padding:px2dp(16),
        flex:1,
        flexDirection:'row',
        flexWrap:'nowrap',
        height:px2dp(120),
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    novelImg:{
        width:px2dp(66),
        height:px2dp(88),
        flexGrow:3,
    },
    infoView:{
        flexGrow:7,
        paddingLeft:px2dp(8),
        height:px2dp(100),
        width:px2dp(375),
    },
    title:{
        fontSize:px2dp(22),
        color:color.primaryTextColor,
        height:px2dp(24),
        lineHeight:px2dp(24),
    },
    text:{
        fontSize:px2dp(16),
        color:color.secondaryTextColor,
    }
});