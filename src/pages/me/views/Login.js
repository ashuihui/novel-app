
import React, { Component } from 'react'
import { Button,TextInput, View } from 'react-native';
import styles from "../styles/login";
import color from '../../../common/styles/color';
import { connect } from 'react-redux'
import {login} from "../../../redux/action";

class Login extends Component{
    componentWillReceiveProps (nextProps) {
        const { user}=nextProps;
        if( user.isLogin){
            this.props.navigation.navigate('My');
        }
    }
    login=()=>{
        const { login,user}=this.props;
        this.refs.userName.clear();
        this.refs.password.clear();
        login(user);
    }
    handleChangeName=(name)=>{
        const { user}=this.props;
        user.userName=name;
    }
    handleChangePassword=(password)=>{
        const { user}=this.props;
        user.password=password;
    }
    render() {

        return (
            <View style={styles.index}>
                <View style={styles.item}>
                    <TextInput
                        ref={'userName'}
                        style={styles.textInput}
                        placeholder={'输入用户名'}
                        maxLength={10}
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleChangeName}
                        onSubmitEditing={this.login}
                    />
                </View>

                <View style={styles.item}>
                    <TextInput
                        ref={'password'}
                        style={styles.textInput}
                        placeholder={'输入密码'}
                        maxLength={10}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleChangePassword}
                        onSubmitEditing={this.login}
                    />
                </View>
                <Button
                    title={'确定'}
                    color={color.accentColor}
                    onPress={this.login}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, {
    login,
})(Login)
