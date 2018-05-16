import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import TotalRank from './views/TotalRank';
import NewRank from './views/NewRank';
import color from "../../common/styles/color";
import styles from "../../common/styles";
import TabLabel from '../../common/component/TabLabel';

export  default  createMaterialTopTabNavigator(
    {
        TotalRank:{
            screen: TotalRank,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:  ({focused,tintColor}) => (
                    <TabLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='总榜'
                        type='1'
                    />
                ),
            }),
        },
        NewRank:{
            screen: NewRank,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:({focused,tintColor}) => (
                    <TabLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='新书榜'
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
        },
        initialRouteName:'TotalRank',
    }
    );