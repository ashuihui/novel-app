import React, { Component } from 'react'
import { View} from 'react-native'
import {connect} from "react-redux";

import {fetchComment} from "../../redux/action";
import NovelCard from '../../common/component/Card';
import  styles from './styles/index';
import AddCard  from './component/AddCard';



class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nid: this.props.navigation.state.params.nid,
            novelName:this.props.navigation.state.params.novelName,
        };
    }
    componentWillMount() {
        // this.props.fetchComment(this.state.nid);
    }
    render() {
        return (
            <View style={styles.index}>
                <AddCard {...this.props} {...this.state}/>
                {/*<NovelCard {...props}/>*/}

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