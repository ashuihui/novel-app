
import React, { Component } from 'react'
import { Button,Text, View } from 'react-native';
import styles from "../styles/my";
import color from '../../../common/styles/color';
import { connect } from 'react-redux'
import {quit} from "../../../redux/action";
import storage from '../../../util/storage';

class My extends Component{
    componentWillReceiveProps (nextProps) {
        const { user}=nextProps;
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
        if(user.isLogin){
            quit(user);
            storage.removeToken();
        }else {
            this.props.navigation.navigate('Login');
        }
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
                    title={user.isLogin? '退出':'去登陆'}
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
