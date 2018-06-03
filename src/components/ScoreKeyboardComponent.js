import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import {
  onScoreChange,
  onScoreSubmit,
  onScoreClear,
  onScoreUndo
} from "../actions";

let buttons = [
  [{ title: "20" }, { title: "19" }, { title: "18" }],
  [{ title: "17" }, { title: "16" }, { title: "15" }],
  [
    { title: "<<", style: { fontSize: 25 } },
    { title: "B"},
    { title: ">>", style: { fontSize: 25 } }
  ]
];

let mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      onScoreChange,
      onScoreSubmit,
      onScoreClear,
      onScoreUndo
    },
    dispatch
  )
});

export const KeyBoard = ({ actions }) => {
  let onButtonPress = title => {
    if (title === "Undo") {
      return actions.onScoreUndo();
    }

    if (title === "Next") {
      actions.onScoreSubmit();
      return actions.onScoreClear();
    }

    actions.onScoreChange(title);
  };

  return (
    <View style={{ alignItems: "center", flexDirection: "column" }}>
      {buttons.map((row, i) => (
        <View key={i} style={{ alignItems: "center", flexDirection: "row" }}>
          {row.map(button => (
            <TouchableOpacity
              key={button.title}
              style={styles.button}
              onPress={onButtonPress.bind(this, button.title)}
            >
              <Text style={[styles.buttonText, button.style]}>
                {button.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    marginRight: 5,
    marginBottom: 5,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "500",
    color: "#666"
  }
});

export default connect(null, mapDispatchToProps)(KeyBoard);