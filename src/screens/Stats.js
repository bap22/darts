import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatsComponent from '../components/StatsComponent';
import { db } from '../config/db';

let dataRef = db.ref('/games/p1');

export default class Stats extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        dataRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>View items from firebase</Text>
                {
                    this.state.items.length > 0
                    ? <StatsComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B6A6BB',
    },
    nav: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    }
});