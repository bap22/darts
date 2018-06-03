import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import NavComponent from '../components/NavComponent';
import { Icon } from 'react-native-elements';
import { Styles, Buttons } from '../styles';

export default class Home extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>CUT THROAT</Text>
                </View>
                <View style={Styles.content}>
                    <Text>Home Screen. Can add buttons to create new game, view stats, share game url?</Text>
                </View>
                <View style={Styles.footer}>
                    <View style={Buttons.nav}>
                        <View style={Buttons.navItem} >
                            <Icon
                                name='home'
                                size={30}
                                color='#333'
                                onPress={() => this.props.navigation.navigate('HomeScreen')}
                            />
                        </View>
                        <View style={Buttons.navItem} >
                            <Icon
                                name='bullseye'
                                type='material-community'
                                size={30}
                                color='#333'
                                onPress={() => this.props.navigation.navigate('NewGameScreen')}
                            />
                        </View>
                        <View style={Buttons.navItem} >
                            <Icon
                                name='chart-line'
                                type='material-community'
                                size={30}
                                color='#333'
                                onPress={() => this.props.navigation.navigate('StatsScreen')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}