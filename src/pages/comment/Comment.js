import React, { Component } from 'react'
import { View} from 'react-native'
import {connect} from "react-redux";

import {fetNovelComments,addComment,clearNovelComments} from "../../redux/action";
import NovelCard from '../../common/component/Card';
import  styles from './styles/index';
import AddCard  from './component/AddCard';
import Comments  from './component/Comments';



class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nid: this.props.navigation.state.params.nid,
            novelName:this.props.navigation.state.params.novelName,
        };
    }
    componentWillMount() {
        this.props.fetNovelComments(this.state.nid,0);
    }
    render() {
        return (
            <View style={styles.index}>
                <NovelCard {...this.props.novel}/>
                <AddCard {...this.props} {...this.state}/>
                <Comments {...this.props} {...this.state}/>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
    novel:state.novel,
    comments:state.novelComments,
});
export default connect(mapStateToProps, {
    addComment,
    fetNovelComments,
    clearNovelComments,
})(Comment)