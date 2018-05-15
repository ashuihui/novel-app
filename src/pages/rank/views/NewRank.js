
import React from 'react'
import { connect } from 'react-redux'
import {fetchNewRank} from "../../../redux/action";
import NovelCardList from '../../../common/component/NovelCardList';

const RankContainer = props => <NovelCardList  {...props}   cardType={'toRead'} buttonType={'addInterest'} />;

const mapStateToProps = state => ({
    novelData: state.newRank
});
const getData=fetchNewRank;
export default connect(mapStateToProps, {
    getData,
})(RankContainer)
