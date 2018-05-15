
import React from 'react'
import { connect } from 'react-redux'
import {addInterest, fetchTotalRank} from "../../../redux/action";
import NovelCardList from '../../../common/component/NovelCardList';

const RankContainer = props => <NovelCardList  {...props}  cardType={'toRead'} buttonType={'addInterest'} />

const mapStateToProps = state => ({
    novelData: state.totalRank,
    user:state.user
});
const getData=fetchTotalRank;
export default connect(mapStateToProps, {
    getData,
    addInterest
})(RankContainer)
