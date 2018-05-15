import React, { Component } from 'react'
import { View} from 'react-native'
import {connect} from "react-redux";

import NovelCard from '../../common/component/Card';
import {fetchComment} from "../../redux/action";



class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nid: this.props.navigation.state.params.nid,
        };
    }
    componentWillMount() {
        this.props.fetchComment(this.state.nid);
    }
    render() {
        return (
            <View>
                <NovelCard {...props}/>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, {
    fetchComment
})(Comment)