import React from 'react'
import { StyleSheet } from 'react-native'

//https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418
export const Buttons = StyleSheet.create({
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
})

export const Styles = StyleSheet.create({
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
    }
});