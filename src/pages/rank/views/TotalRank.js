
import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import styles from '../../../common/styles/index';

class Rank extends Component{
    render() {
        const {totalRank} = this.props;
        return (
            <View style={styles.index}>
                <Text>{JSON.stringify(totalRank)}</Text>
            </View>
        );
    }
}
const RankContainer = props => <Rank {...props} />

const mapStateToProps = state => ({
    totalRank: state.totalRank
});
export default connect(mapStateToProps)(RankContainer)
