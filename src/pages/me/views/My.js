
import React, { Component } from 'react'
import { Button,Text, View } from 'react-native';
import styles from "../styles/my";
import color from '../../../common/styles/color';
import { connect } from 'react-redux'
import {quit,isLogin} from "../../../redux/action";

class My extends Component{
    componentWillReceiveProps (nextProps) {
        const { user}=nextProps;
        this.props.isLogin();
        if( !user.isLogin){
            this.props.navigation.navigate('Login');
        }
    }
    componentWillMount(){
        const { user}=this.props;
        if( !user.isLogin){
            this.props.navigation.navigate('Login');
        }
    }
    userQuit=()=>{
        const { quit,user}=this.props;
        quit(user);
    }
    render() {
        const { quit,user}=this.props;
        return (
            <View style={styles.index}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        {user.userName}
                    </Text>
                </View>

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
    isLogin
})(My)
