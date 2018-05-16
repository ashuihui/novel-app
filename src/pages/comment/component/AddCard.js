import React, { Component } from 'react'
import { TextInput,View,Text,Image ,TouchableHighlight} from 'react-native';
import color from '../../../common/styles/color';

import Button from 'react-native-button';
import styles from '../styles/addCard';


class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star: 0,
            word:'none'
        }
    }
    handleTextChange=(word)=>{
        this.setState({word});
    }
    add=()=>{
        console.log(this.props.nid)
        console.log(this.props.novelName)
        console.log('onpress :'+this.state.word+this.state.star);

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
                    style={styles.textInput}
                    maxLength={200}
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