
import React, { Component } from 'react'
import { Button,TextInput, View } from 'react-native';
import styles from "../styles/login";
import color from '../../../common/styles/color';
import { connect } from 'react-redux'
import {quit} from "../../../redux/action";

class My extends Component{
    componentWillReceiveProps (nextProps) {
        const { user}=nextProps;
        if( !user.isLogin){
            this.props.navigation.navigate('Login');
        }
    }
    userQuit=()=>{
        const { quit,user}=this.props;
        quit(user);
    }
    render() {

        return (
            <View style={styles.index}>

                <Button
                    title={'退出'}
                    color={color.accentColor}
                    onPress={this.userQuit}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, {
    quit,
})(My)
