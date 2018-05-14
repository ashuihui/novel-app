import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import color from "../../common/styles/color";
import styles from "../../common/styles";
import TabLabel from '../../common/component/TabLabel';

import Login from './views/Login';
import Reg from './views/Reg';
import My from './views/My';


const  TopStack = createMaterialTopTabNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:  ({focused,tintColor}) => (
                    <TabLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='登录'
                        type='1'
                    />
                ),
            }),
        },
        Reg:{
            screen: Reg,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:({focused,tintColor}) => (
                    <TabLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='注册'
                        type='1'
                    />
                ),
            }),
        }
    },
    {
        tabBarOptions: {
            activeTintColor: color.primaryColorText,
            inactiveTintColor:color.secondaryTextColor,
            labelStyle: styles.labelStyle,
            style: styles.tabTop,
            indicatorStyle:styles.lineTab,
        }
    }
);

export  default createStackNavigator(
    {
        MeLoginReg:{
            screen:TopStack,
            navigationOptions: ({ navigation }) => ({
                header:null,
            }),
        },
        My:{
            screen:My,
            navigationOptions: ({ navigation }) => ({
                header:null,
            }),
        },
    },
    {
        initialRouteName:'My',
        headerMode:'screen',

    }
);