import React, { Component } from 'react'
import {RefreshControl, View, FlatList, StyleSheet} from 'react-native';
import NovelCard from './NovelCard';


class NovelCardList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _onRefresh() {
        const { getData,novelData}=this.props;
        getData(novelData.length-1);
        this.setState({refreshing: false});
    }
    freshMore=()=>{
        const { getData,novelData}=this.props;
        getData(novelData.length-1);
    }
    render() {
        const {novelData} = this.props;
        const novelList = novelData.map(
            (novel,index)=>{
                novel.key=JSON.stringify(novel.nid)+index;
                return novel;
            }
        );
        return (
            <View style={styles.tabButtomView}>
                <FlatList
                    data={novelList}
                    renderItem={({item}) => <NovelCard  cardType={'toRead'} {...item}  {...this.props}/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    onEndReachedThreshold={0.05}
                    onEndReached={this.freshMore}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabButtomView:{
        margin: 0,
        display:'flex',
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent:'space-around'

    },

});


export default NovelCardList;