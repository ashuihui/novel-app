import React,{Component} from 'react';
import {Text,View,Image,StyleSheet,TouchableHighlight,ActivityIndicator} from 'react-native';
import Button from 'react-native-button';
import px2dp from '../styles/px2dp';
import color from '../styles/color';
import toast from '../../util/toast';

 class Card extends Component {
     addInterest=()=>{
         const {user}= this.props;
         if(!!user.token){
             this.props.addInterest(user.token,this.props.nid);
             this.props.navigation.navigate('BookShelf', {refresh: true});
         }else {
             toast.toastShort('未登录');
             this.props.navigation.navigate('Login');
         }
     }
     delete=()=>{
         const {user}= this.props;
         if(!!user.token){
             this.props.deleteInterest(user.token,this.props.nid);
             this.props.navigation.navigate('BookShelf', {refresh: true});
         }else {
             toast.toastShort('未登录');
             this.props.navigation.navigate('Login');
         }
     }
     goComment=()=>{
         const {user}= this.props;
         if(!!user.token){
             this.props.navigation.navigate('Comment', {nid: this.props.nid,novelName:this.props.novelName});
         }else {
             toast.toastShort('未登录');
             this.props.navigation.navigate('Login');
         }
     }
     render() {
         if(this.props.buttonType==='addInterest'){
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
                         <View style={styles.textButton}>
                             <Text style={styles.text}>来自：{this.props.beFrom}</Text>
                             <View style={styles.buttonView}>
                                 <Button
                                     style={styles.button}
                                     onPress={this.addInterest}>
                                     添加到书架
                                 </Button>
                             </View>
                         </View>
                     </View>
                 </View>
             )
         }else{
             return(
                 <View style={styles.card}>
                     <View style={styles.imgView}>
                         <Image style={styles.img}  source={{uri:this.props.imgUrl}}/>
                     </View>
                     <View style={styles.infoView}>
                         <Text style={styles.title}>{this.props.novelName}</Text>
                         <View style={styles.textButton}>
                             <Text style={styles.text}>作者：{this.props.author}</Text>
                             <View style={styles.buttonView}>
                                 <Button
                                     style={styles.button}
                                     onPress={this.goComment}>
                                     去评论
                                 </Button>
                             </View>
                         </View>
                         <Text style={styles.text}>字数：{this.props.wordCount}</Text>
                         <Text style={styles.text}>最后更新：{this.props.updateTime}</Text>
                         <View style={styles.textButton}>
                             <Text style={styles.text}>来自：{this.props.beFrom}</Text>
                             <View style={styles.buttonView}>
                                 <Button
                                     style={styles.buttonDel}
                                     onPress={this.delete}>
                                     删除
                                 </Button>
                             </View>
                         </View>
                     </View>
                 </View>
             )
         }

     }
 }

export default class NovelCard extends Component {
    toRecommendation=()=>{
        this.props.navigation.navigate('Recommendation', {nid: this.props.nid});
    }
    toRead=()=>{
        this.props.navigation.navigate('Read', {novelUrl: this.props.novelUrl});
    }
    render() {
        //buttonType={'addInterest'}
        if(this.props.cardType==='toRead'){
            return(
                <TouchableHighlight onPress={this.toRead}>
                    <Card {...this.props}/>
                </TouchableHighlight>
            )
        }else{
            return(
                <View>
                    <TouchableHighlight onPress={this.toRecommendation}>
                        <Card {...this.props}/>
                    </TouchableHighlight>
                </View>
            )
        }

    }
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:color.backprimary,
        padding:px2dp(16),
        flex:1,
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'stretch',
        height:px2dp(155),
        borderTopWidth:px2dp(1),
        borderStyle:'solid',
        borderColor:color.dividerColor,
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
    textButton:{
        height:px2dp(25),
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttonView:{
        height:px2dp(24),
        width:px2dp(100),
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        backgroundColor:color.backprimary,
    },
    button:{
        flex:1,
        height:px2dp(24),
        fontSize:px2dp(16),
        color:color.accentColor,
        backgroundColor:color.backprimary,

    },
    buttonDel:{
        flex:1,
        height:px2dp(24),
        fontSize:px2dp(16),
        color:color.dividerColor,
        backgroundColor:color.backprimary,

    }
});