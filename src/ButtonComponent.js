import React, { Component } from "react";
import { Button } from "native-base";
import { styles } from "./styles";
import { View, Text } from "react-native";

export default class ButtonComponent extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          block
          light
          large
          bordered
          onPress={this.props.buttonClicked}
          disabled={this.props.isdisabled}
        >
          <Text style={styles.buttonText}>Next Quote</Text>
        </Button>
      </View>
    );
  }
}
