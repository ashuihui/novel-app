import React,{Component} from 'react';
import {Text,View,Image,StyleSheet,} from 'react-native';
import px2dp from "../../../common/styles/px2dp";
import color from "../../../common/styles/color";

class Card extends Component {
    render() {
        return(
            <View style={styles.card}>
                <View style={styles.user}>
                    <View style={styles.scoreView}>
                        <Text style={styles.miniTitle}>用户:  </Text>
                        <Text style={styles.userName}>{this.props.userName}</Text>
                    </View>
                    <View style={styles.scoreView}>
                        <Text style={styles.miniTitle}>评分:  </Text>
                        <Text style={styles.score}>{this.props.score}</Text>
                    </View>
                </View>
                <View style={styles.commentView}>
                    <Text style={styles.comment}>
                        {this.props.comment}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        height:px2dp(200),
        backgroundColor:color.backprimary,
        marginTop:px2dp(10),
        alignItems:'stretch',
        borderWidth:px2dp(1),
        borderColor:color.dividerColor,
        borderRadius:px2dp(5),
        marginBottom:px2dp(10),
    },
    user:{
        height:px2dp(50),
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomWidth:px2dp(1),
        borderColor:color.dividerColor,
    },
    scoreView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    userName:{
        color:color.primaryTextColor,
        fontSize:px2dp(24),
        lineHeight:px2dp(50),
    },
    miniTitle:{
        color:color.secondaryTextColor,
        fontSize:px2dp(14),
        lineHeight:px2dp(50),
    },
    score:{
        color:color.accentColor,
        fontSize:px2dp(24),
        lineHeight:px2dp(50),
    },
    commentView:{
        paddingLeft:px2dp(10),
        paddingRight:px2dp(10),
        justifyContent:'center',
        alignItems:'center',

    },
    comment:{
        fontSize:px2dp(20),
        color:color.secondaryTextColor,
    },
});

export default Card;