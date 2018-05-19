import React, { Component } from 'react'
import {connect} from "react-redux";
import {addInterest, fetchRecommendation,getUserRecommendation} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardListNofresh';


class Recommendation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nid: this.props.navigation.state.params.nid,
        };
    }
    componentDidMount() {
        if(this.state.nid!==0){
            this.props.getData(this.state.nid);
        }else{
            this.props.getUserRecommendation(this.props.user.token);
        }
    }
    render() {
        return (
            <NovelCardList  {...this.props}   cardType={'toRead'} buttonType={'addInterest'} />
        );
    }
}


const mapStateToProps = state => ({
    novelData: state.recommendation,
    user: state.user
});
const getData=fetchRecommendation;
export default connect(mapStateToProps, {
    getData,
    addInterest,
    getUserRecommendation
})(Recommendation)