import React, { Component } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    nav: {
        width: 100,
        flexDirection: 'row'
    },
    navItem: {
        flex: 1
    }
});

export default class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navigation: this.props.navigation 
        } 
    }
    render() {
        return (
            <View style={styles.nav}>
                <View style={styles.navItem} >
                    <Icon
                        name='home'
                        size={30}
                        color='#900'
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                    />
                </View>
                <View style={styles.navItem} >
                    <Icon
                        name='bullseye'
                        type='material-community'
                        size={30}
                        color='#900'
                        onPress={() => this.props.navigation.navigate('NewGameScreen')}
                    />
                </View>
                <View style={styles.navItem} >
                    <Icon
                        name='chart-line'
                        type='material-community'
                        size={30}
                        color='#900'
                        onPress={() => this.props.navigation.navigate('StatsScreen')}
                    />
                </View>
            </View>
        );
    }
}