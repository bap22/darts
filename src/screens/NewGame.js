import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    AlertIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { saveToFirebase } from '../services/FirebaseService';
import KeyBoard from "../components/ScoreKeyboardComponent";

// const mapStateToProps = state => ({
//     error: state.error,
//     currentScore: state.currentScore,
//     currentPlayer: state.currentPlayer
// });

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            score: 0,
            error: false
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(e) {
    //     this.setState({
    //         name: e.nativeEvent.text
    //     });
    // }
    // handleSubmit() {
    //     saveToFirebase(this.state.name);
    //     AlertIOS.alert(
    //         'Saved successfully to FireBase'
    //     );
    // }

    render() {
        return (
            <View style={styles.main}>
            {this.state.score}
                {/* <Text style={styles.title}>Save something to firebase</Text>
                <TextInput
                    style={styles.itemInput}
                    onChange={this.handleChange}
                />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text
                        style={styles.buttonText}>
                        SAVE
                    </Text>
                </TouchableHighlight> */}
                <KeyBoard />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2a8ab7'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
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