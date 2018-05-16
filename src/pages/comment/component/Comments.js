import React, { Component } from 'react'
import { View, FlatList, StyleSheet,RefreshControl} from 'react-native';
import px2dp from "../../../common/styles/px2dp";
import color from "../../../common/styles/color";
import CommentCard from './CommentCard';


class CommentsCardList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _onRefresh() {
        const { nid,fetNovelComments,clearNovelComments}=this.props;
        clearNovelComments();
        setTimeout(()=>{
            fetNovelComments(nid,0);
            this.setState({refreshing: false});
        })
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
                    renderItem={({item}) => <CommentCard {...item} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    indexView:{
        height:px2dp(350),
        paddingTop: px2dp(5),
        backgroundColor:color.backprimary,
        flex:1,
    },

});


export default CommentsCardList;