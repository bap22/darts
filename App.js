/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    YellowBox
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import NewGame from './src/screens/NewGame';
import Stats from './src/screens/Stats';
import reducer from './src/reducer'

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

const store = createStore(reducer);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}