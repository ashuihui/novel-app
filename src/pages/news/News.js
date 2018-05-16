import React, { Component } from 'react'
import { View, FlatList, StyleSheet,RefreshControl} from 'react-native';
import {connect} from "react-redux";

import {fetCommentsFlow,clearCommentsFlow,fetNovelComments} from "../../redux/action";
import CommentCard from './component/CommentCard';
import color from "../../common/styles/color";
import px2dp from "../../common/styles/px2dp";



class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    componentWillMount() {
        this.props.fetCommentsFlow(0);
    }
    _onRefresh() {
        const { clearCommentsFlow,fetCommentsFlow}=this.props;
        clearCommentsFlow();
        setTimeout(()=>{
            fetCommentsFlow(0);
            this.setState({refreshing: false});
        })
    }
    freshMore=()=>{
        const { comments,fetCommentsFlow}=this.props;
        fetCommentsFlow(comments.length-1);
    }
    render() {
        const {comments} = this.props;
        const commentsList = comments.map(
            (comment)=>{
                comment.key=`${comment.uid}${comment.userName}${comment.nid}`;
                return comment;
            }
        );
        return (
            <View style={styles.indexView}>
                <FlatList
                    data={commentsList}
                    renderItem={({item}) => <CommentCard {...item} {...this.props} />}
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
    indexView:{
        padding: px2dp(10),
        backgroundColor:color.backprimary,
        flex:1,
    },

});

const mapStateToProps = state => ({
    comments:state.commentsFlow,
    novel:state.novel,
});
export default connect(mapStateToProps, {
    fetCommentsFlow,
    clearCommentsFlow,
    fetNovelComments,
})(News)