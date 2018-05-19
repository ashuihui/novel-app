
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
    toRecommendation=()=>{
        this.props.navigation.navigate('Recommendation', {nid: 0});
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

                {user.isLogin?
                    <Button
                        title={'猜你喜欢'}
                        color={color.accentColor}
                        onPress={this.toRecommendation}
                    />
                    :null}
                <View>
                    <Text style={styles.kkry}>HI</Text>
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
