import React, { Component } from "react";
import { View, ImageBackground, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import QuoteTextComponent from "./QuoteTextComponent";
import ButtonComponent from "./ButtonComponent";

const API = "https://talaikis.com/api/quotes/random/";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIcon: "hearto",
      favIconColor: "#FFF",
      quote:
        "You get to a certain age and you just want to prove that you can still rock - that you've still got it.",
      quoteAuthor: "Jarvis Cocker",
      isLoading: true
    };
  }

  async componentDidMount() {
    this._nextButtonClicked();
  }

  async _nextButtonClicked() {
    try {
      this.setState({
        isLoading: true
      });
      const response = await fetch(API);
      const responseJson = await response.json();
      this.setState(
        {
          favIcon: "hearto",
          favIconColor: "#FFF",
          isLoading: false,
          quote: responseJson.quote,
          quoteAuthor: responseJson.author
        },
        function() {}
      );
    } catch (error) {
      this.setState({
        isLoading: false
      });
    }
  }

  _favIconTouched = () => {
    if (this.state.favIcon === "hearto") {
      this.setState({
        favIcon: "heart",
        favIconColor: "#FF0000"
      });
    } else if (this.state.favIcon === "heart") {
      this.setState({
        favIcon: "hearto",
        favIconColor: "#FFF"
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <ImageBackground
          source={require("../assets/images/bg_screen1.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <View style={styles.quoteContainer}>
              <ActivityIndicator size="large" color="#FFF" />
            </View>
            <ButtonComponent
              buttonClicked={() => this._nextButtonClicked()}
              disabled={!this.state.isLoading}
            />
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("../assets/images/bg_screen1.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <QuoteTextComponent
              quoteText={this.state.quote}
              quoteAuthor={this.state.quoteAuthor}
              touchableClicked={() => this._favIconTouched()}
              iconName={this.state.favIcon}
              iconColor={this.state.favIconColor}
              iconSize={60}
            />
            <ButtonComponent
              buttonClicked={() => this._nextButtonClicked()}
              disabled={!this.state.isLoading}
            />
          </View>
        </ImageBackground>
      );
    }
  }
}
