import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import NavComponent from '../components/NavComponent';
import { Icon } from 'react-native-elements'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>CUT THROAT</Text>
                </View>
                <View style={styles.content}>
                    <Text>Home Screen. Can add buttons to create new game, view stats, share game url?</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.nav}>
                        <View style={styles.navItem} >
                            <Icon
                                name='home'
                                size={30}
                                color='#333'
                                onPress={() => this.props.navigation.navigate('HomeScreen')}
                            />
                        </View>
                        <View style={styles.navItem} >
                            <Icon
                                name='bullseye'
                                type='material-community'
                                size={30}
                                color='#333'
                                onPress={() => this.props.navigation.navigate('NewGameScreen')}
                            />
                        </View>
                        <View style={styles.navItem} >
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

//https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24
    },
    content: {
        flex: 10
    },
    footer: {
        flex: 1
    },
    nav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navItem: {
        width: 75,
        height: 75,
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        justifyContent: 'center',
    }
});