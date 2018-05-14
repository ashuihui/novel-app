
import React, { Component } from 'react'
import { Button,TextInput, View } from 'react-native';
import styles from "../styles/login";
import color from '../../../common/styles/color';
import { connect } from 'react-redux'
import {registered} from "../../../redux/action";

class Reg extends Component{
    componentWillReceiveProps (nextProps) {
        const { user}=nextProps;
        if( user.isLogin){
            this.props.navigation.navigate('My');
        }
        if( user.isReg){
            this.props.navigation.navigate('Login');
        }
    }
    registered=()=>{
        const { registered,user}=this.props;
        if(user.password===user.passwordTwo){
            if(user.userName&&user.testCode&&user.password){
                registered(user);
            }else {
                alert('不能为空')
            }
        }else{
            alert('输入的密码不一致')
        }
        this.refs.userName.clear();
        this.refs.password.clear();
        this.refs.passwordTwo.clear();
        this.refs.testCode.clear();
    }
    handleChangeName=(name)=>{
        const { user}=this.props;
        user.userName=name;
    }
    handleChangePassword=(password)=>{
        const { user}=this.props;
        user.password=password;
    }
    handleChangePasswordTwo=(passwordTwo)=>{
        const { user}=this.props;
        user.passwordTwo=passwordTwo;
    }
    handleChangeTestCode=(testCode)=>{
        const { user}=this.props;
        user.testCode=testCode;
    }
    render() {

        return (
            <View style={styles.index}>
                <View style={styles.item}>
                    <TextInput
                        ref={'userName'}
                        style={styles.textInput}
                        placeholder={'请输入用户名'}
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
                        placeholder={'请输入密码'}
                        maxLength={10}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleChangePassword}
                        onSubmitEditing={this.login}
                    />
                </View>
                <View style={styles.item}>
                    <TextInput
                        ref={'passwordTwo'}
                        style={styles.textInput}
                        placeholder={'请再次输入密码'}
                        maxLength={10}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleChangePasswordTwo}
                    />
                </View>
                <View style={styles.item}>
                    <TextInput
                        ref={'testCode'}
                        style={styles.textInput}
                        placeholder={'请输入内测码'}
                        maxLength={10}
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleChangeTestCode}
                    />
                </View>
                <Button
                    title={'确定'}
                    color={color.accentColor}
                    onPress={this.registered}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, {
    registered,
})(Reg)
