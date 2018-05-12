
import React, { Component } from 'react'
import { Text, ScrollView,View ,FlatList} from 'react-native';
import { connect } from 'react-redux'
import styles from '../../../common/styles/index';
import NovelCard from '../../../common/component/NovelCard';
import {fetchTotalRank} from "../../../redux/action";

class Rank extends Component{
    render() {
        const {totalRank} = this.props;
        const novelList = totalRank.map(
            (novel,index)=>{
                novel.key=JSON.stringify(novel.nid);
                return novel;
            }
        );
        console.log(novelList);
        return (
            <View style={styles.tabButtomView}>
                <FlatList
                    data={novelList}
                    renderItem={({item}) => <NovelCard {...item}/>}
                    />
            </View>
        );
    }
}
const RankContainer = props => <Rank  {...props} />

const mapStateToProps = state => ({
    totalRank: state.totalRank
});
export default connect(mapStateToProps, {
        fetchTotalRank,
})(RankContainer)
