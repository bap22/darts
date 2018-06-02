/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import NewGame from './src/screens/NewGame';
import Stats from './src/screens/Stats';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

const AppNavigator = createStackNavigator(
    {
        HomeScreen: { screen: Home },
        NewGameScreen: { screen: NewGame },
        StatsScreen: { screen: Stats }
    },
    {
        initialRouteName: 'HomeScreen'
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <AppNavigator />
        );
    }
}