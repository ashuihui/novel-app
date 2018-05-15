import React, { Component } from 'react'
import { View,ActivityIndicator } from 'react-native';
import {connect} from "react-redux";
import {fetchBookShelf,deleteInterest} from "../../redux/action";

import NovelCardList from '../../common/component/NovelCardListNofresh';
import styles from './styles/index';
import color from '../../common/styles/color';
import Searcher from './component/Searcher';

class BookShelf extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWait: false,
        };
    }
    componentWillReceiveProps(nextProps){
        if(!!nextProps.user.token&&nextProps.user.token!==this.props.user.token){
            this.props.getData(nextProps.user.token);
        }
        if(!!nextProps.navigation.state.params){
            if(!!nextProps.navigation.state.params.refresh){
                this.props.navigation.setParams({refresh:false});
                this.setState(()=>{return {isWait:true}});
                setTimeout(()=>{
                    this.props.getData(this.props.user.token);
                    this.setState(()=>{return {isWait:false}});

                },200)
            }
        }
    }
    render() {
        return (
            <View style={styles.index} >
                <Searcher {...this.props}/>
                <ActivityIndicator
                    style={{display:this.state.isWait? 'flex':'none'} }
                    animating={this.state.isWait}
                    color={color.primaryColor}
                    size={'large'}/>
                <NovelCardList {...this.props}  cardType={'toRead'}  buttonType={'addComment'} />
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
    deleteInterest
})(BookShelf)