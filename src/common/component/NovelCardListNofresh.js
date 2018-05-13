import React, { Component } from 'react'
import { View, FlatList, StyleSheet} from 'react-native';
import NovelCard from './NovelCard';


class NovelCardList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
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
                    renderItem={({item}) => <NovelCard {...item} {...this.props} />}
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