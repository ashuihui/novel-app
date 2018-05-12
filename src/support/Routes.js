import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';


class OneScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="OneScreen to TwoScreen"
                    onPress={() => this.props.navigation.navigate('Two')}
                />
            </View>
        );
    }
}
class TwoScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="TwoScreen to OneScreen"
                    onPress={() => this.props.navigation.navigate('One')}
                />
            </View>
        );
    }
}




