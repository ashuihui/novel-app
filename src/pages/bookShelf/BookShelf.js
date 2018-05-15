import React, { Component } from 'react'
import { View } from 'react-native';
import {connect} from "react-redux";
import {fetchBookShelf} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardListNofresh';
import styles from './styles/index';
import Searcher from './component/Searcher';

class BookShelf extends Component{

    componentWillUpdate(nextProps, nextState){
        if(this.props.user.token!==nextProps.user.token){
            this.props.getData(nextProps.user.token);
        }
    }
    render() {
        return (
            <View style={styles.index} >
                <Searcher {...this.props}/>
                <NovelCardList {...this.props}  cardType={'toRead'}  buttonType={'addComment'}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    novelData: state.bookShelf,
    user:state.user
});
const getData=fetchBookShelf;
export default connect(mapStateToProps, {
    getData,
})(BookShelf)