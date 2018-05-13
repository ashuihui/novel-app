import React, { Component } from 'react'
import {  StyleSheet,WebView} from 'react-native';


class Read extends Component{
    constructor(props) {
        super(props);
        this.state = {
            novelUrl: this.props.navigation.state.params.novelUrl,
        };
    }
    errDeal=()=>{
        aler('该书已经被官方网站404');
        this.setState(previousState => {
            return {
                ...previousState,
                novelUrl:'http://www.baidu.com/s?wd='+this.props.novelName
        };
        });
    }
    render() {
        console.log(this.state);
        return (
            <WebView
                style={styles.index}
                source={{uri: this.state.novelUrl}}
                onError={this.errDeal}
                scalesPageToFit={true}
            >
            </WebView>
        );
    }
}

const styles = StyleSheet.create({
    index:{
        flex:1
    }
});


export default Read;
