//路由
import React from 'react';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import BookShelf from './pages/bookShelf/BookShelf';
import Rank from './pages/rank/RankContainer';
import News from './pages/news/News';
import Me from './pages/me/Me';
import Searcher from './pages/searcher/Searcher';
import Recommendation from './pages/recommendation/Recommendation';
import Read from './pages/read/Read';

import color from './common/styles/color';
import styles from './common/styles/index';
import TabBottomIcon from './common/component/TabBottomIcon';
import TabBottomLabel from './common/component/TabLabel';

const  BottomNav= createBottomTabNavigator(
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


export  default createStackNavigator(
    {
        Main:{
            screen:BottomNav,
            navigationOptions: ({ navigation }) => ({
                header:null,
            }),
        },
        Searcher:{
            screen:Searcher,
            navigationOptions: ({ navigation }) => ({
                title:'搜索',
                gesturesEnabled:true,
                headerStyle:styles.headerTop,
                headerTitleStyle:styles.headerTitle,
                headerTintColor:color.primaryColorText
            }),
        },
        Recommendation:{
            screen:Recommendation,
            navigationOptions: ({ navigation }) => ({
                title:'推荐',
                gesturesEnabled:true,
                headerStyle:styles.headerTop,
                headerTitleStyle:styles.headerTitle,
                headerTintColor:color.primaryColorText
            }),
        },
        Read:{
            screen:Read,
            navigationOptions: ({ navigation }) => ({
                title:'阅读',
                gesturesEnabled:true,
                headerStyle:styles.headerTop,
                headerTitleStyle:styles.headerTitle,
                headerTintColor:color.primaryColorText
            }),
        },
    },
    {
        headerMode:'screen',
    }
);


