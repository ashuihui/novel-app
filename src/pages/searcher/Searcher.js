import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchSearcher} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardListNofresh';


class Searcher extends Component{
    constructor(props) {
        super(props);
        this.state = {
            word: this.props.navigation.state.params.word,
        };
    }
    componentDidMount() {
        this.props.getData(this.state.word);
    }
    render() {
        return (
            <NovelCardList  {...this.props}  cardType={'toRecommendation'}/>
        );
    }
}


const mapStateToProps = state => ({
    novelData: state.searcher
});
const getData=fetchSearcher;
export default connect(mapStateToProps, {
    getData,
})(Searcher)