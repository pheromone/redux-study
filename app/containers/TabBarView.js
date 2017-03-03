/**
 * Created by shaotingzhou on 2017/2/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import One from './one';
import Two from './two';
import Three from './three'


const tabBarItems = [
    { title: '第一', icon: () => <Image style={{ width: 20, height: 20 }} source={require('../image/one.png')} />, component: One },
    { title: '第二', icon: () => <Image style={{ width: 20, height: 20 }} source={require('../image/two.png')} />, component: Two },
    { title: '第三', icon: () => <Image style={{ width: 20, height: 20 }} source={require('../image/three.png')} />, component: Three },
];

export default class TabBarView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{ height: 49 }}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key={i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                onPress={() => this.setState({ selectedTab: controller.title })}>
                                <Component navigator={this.props.navigator} {...this.props} />
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        );
    }
}