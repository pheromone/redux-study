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
    Animated,
    Image,
    Easing
} from 'react-native';


export default class Two extends Component {
    // 构造
      constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        // 初始状态
        this.state = {};
      }
    componentDidMount () {
        this.spin()
    }
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }


    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
          width: 227,
          height: 200,
          transform: [{rotate: spin}] }}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


