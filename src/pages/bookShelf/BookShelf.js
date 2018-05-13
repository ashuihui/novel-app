import React, { Component } from 'react'
import { View } from 'react-native';
import {connect} from "react-redux";
import {fetchBookShelf} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardList';
import styles from './styles/index';
import Searcher from './component/Searcher';

class BookShelf extends Component{
    render() {
        return (
            <View style={styles.index} >
                <Searcher {...this.props}/>
                <NovelCardList  {...this.props} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    novelData: state.bookShelf
});
const getData=fetchBookShelf;
export default connect(mapStateToProps, {
    getData,
})(BookShelf)