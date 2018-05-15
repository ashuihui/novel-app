import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchRecommendation} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardListNofresh';


class Recommendation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nid: this.props.navigation.state.params.nid,
        };
    }
    componentDidMount() {
        this.props.getData(this.state.nid);
    }
    render() {
        return (
            <NovelCardList  {...this.props}   cardType={'toRead'} buttonType={'addInterest'} />
        );
    }
}


const mapStateToProps = state => ({
    novelData: state.recommendation
});
const getData=fetchRecommendation;
export default connect(mapStateToProps, {
    getData,
})(Recommendation)