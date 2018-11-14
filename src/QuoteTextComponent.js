import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

export default class QuoteTextComponent extends Component {
  render() {
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{this.props.quoteText}</Text>
        <Text style={styles.authorText}>{this.props.quoteAuthor}</Text>
        <TouchableOpacity onPress={this.props.touchableClicked}>
          <Icon
            name={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
