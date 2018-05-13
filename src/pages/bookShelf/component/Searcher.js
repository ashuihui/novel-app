import React, { Component } from 'react'
import { Text,TextInput, View,Button,Image } from 'react-native';
import styles from '../styles/searcher';

class Searcher extends Component{
    constructor(props) {
        super(props);
        this.state = {
            word: '',
        };
    }
    submitCmt=()=>{
        this.refs.textInput.clear();
        this.props.navigation.navigate('Searcher', {word: this.state.word});
    }
    handleChange=word=>{
        this.setState({word});
    }
    render() {
        const { word } = this.state
        return (
            <View style={styles.card}>
                <TextInput
                    ref={'textInput'}
                    style={styles.textInput}
                    maxLength={10}
                    underlineColorAndroid='transparent'
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.submitCmt}
                />
                <Image
                    style={styles.img}
                    source={require('../img/searcher.png')}
                />

            </View>
        );
    }
}

export default Searcher;