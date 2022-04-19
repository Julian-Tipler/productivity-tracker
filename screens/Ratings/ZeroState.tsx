import { Text, View } from "react-native";
import React, { Component } from "react";

export class ZeroState extends Component {
  render() {
    return (
      <View>
        <Text>You don't have any categories. Click the following button to Create your first category:</Text>
      </View>
    );
  }
}

export default ZeroState;
