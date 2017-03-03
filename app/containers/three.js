/**
 * Created by shaotingzhou on 2017/2/28.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class One extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    THREE
                </Text>
                <Text style={styles.instructions}>
                    THREE
                </Text>
                <Text style={styles.instructions}>
                    THREE
                </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


