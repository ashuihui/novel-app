import dateFormat from 'dateformat';

import React, { Component } from 'react'
import { TextInput,View,Text,Image ,TouchableHighlight} from 'react-native';
import color from '../../../common/styles/color';

import Button from 'react-native-button';
import styles from '../styles/addCard';
import toast from '../../../util/toast';


class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star: 0,
            word:''
        }
    }
    handleTextChange=(word)=>{
        this.setState({word});
    }
    add=()=>{
        if(this.state.star>0){
           if(this.state.word.length>0){
               if(!!this.props.user.token){
                   const result={
                           nid:this.props.nid,
                           novelName:this.props.novelName,
                           uid:this.props.user.userId,
                           userName:this.props.user.userName,
                           comment:this.state.word,
                           score:parseInt(this.state.star),
                           updateTime:dateFormat(new Date(),'yyyy-mm-dd HH:MM:ss')
                   };
                   this.props.clearNovelComments();
                   this.props.addComment(this.props.user.token,result);
                   setTimeout(()=>{
                       this.props.fetNovelComments(this.props.nid,0);
                   },200);
                   this.setState(()=>{
                       return {
                           word:''
                       }
                   });
                   this.refs.textInput.clear();
               }else{
                   toast.toastShort('尚未登录')
               }
           }else{
               toast.toastShort('没有评论')
           }
        }else{
            toast.toastShort('没有评分')
        }
    }
    render() {
        const arr=[1,2,3,4,5];
        const starList = arr.map(
            (value,index)=>{
                return (
                    <TouchableHighlight
                        key={`star${value}View`}
                        onPress={()=>{
                            this.setState((pre)=>{
                                return {
                                    star: value
                                }
                            })
                        }}
                        underlayColor={color.backprimary}
                        style={{flex:1}}
                    >
                        <View
                            style={styles.star}>
                            <Image
                                ref={`star${value}`}
                                resizeMode={'cover'}
                                style={styles.img}
                                source={this.state.star>=value? require('../img/star.png'):require('../img/star-0.png')}
                            />
                        </View>
                    </TouchableHighlight>
                )
            }
        );
        return (
            <View style={styles.card}>
                <View style={styles.starView}>
                    {starList}
                </View>
                <TextInput
                    ref={'textInput'}
                    style={styles.textInput}
                    maxLength={100}
                    multiline={true}
                    onChangeText={this.handleTextChange}
                    onSubmitEditing={this.add}
                    blurOnSubmit={true}
                />
                <Button
                    style={styles.button}
                    onPress={this.add}>
                    提交评论
                </Button>
            </View>
        );
    }
}



export default AddCard;

