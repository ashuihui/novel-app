//路由
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import BookShelf from './pages/bookShelf/BookShelf';
import Rank from './pages/rank/Rank';
import News from './pages/news/News';
import Me from './pages/me/Me';

import color from './common/styles/color';
import styles from './common/styles/index';
import TabBottomIcon from './common/component/TabBottomIcon';
import TabBottomLabel from './common/component/TabLabel';

export  default  createBottomTabNavigator(
    {
        BookShelf:{
            screen: BookShelf,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:  ({focused,tintColor}) => (
                    <TabBottomLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='书架'
                    />
                ),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBottomIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./common/img/book-0.png')}
                        selectedImage={require('./common/img/book.png')}
                    />
                )
            }),
        },
        Rank:{
            screen: Rank,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:  ({focused,tintColor}) => (
                    <TabBottomLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='排行榜'
                    />
                ),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBottomIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./common/img/champion-0.png')}
                        selectedImage={require('./common/img/champion.png')}
                    />
                )
            }),
        },
        News:{
            screen: News,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel:  ({focused,tintColor}) => (
                    <TabBottomLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='发现'
                    />
                ),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBottomIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./common/img/credit-level-0.png')}
                        selectedImage={require('./common/img/credit-level.png')}
                    />
                )
            }),
        },
        Me:{
            screen: Me,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: ({focused,tintColor}) => (
                    <TabBottomLabel
                        tintColor={tintColor}
                        focused={focused}
                        title='我'
                    />
                ),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBottomIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./common/img/me-0.png')}
                        selectedImage={require('./common/img/me.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarOptions: {
            activeTintColor: color.primaryColorDark,
            inactiveTintColor:color.secondaryTextColor,
            labelStyle: styles.labelStyle,
            style: styles.tabBottom,
            showIcon: true
        }
    }
);




