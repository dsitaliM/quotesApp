import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 12,
    flex: 1,
    flexDirection: "column"
  },
  quoteContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  quoteText: {
    color: "#FFF",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Questrial-Regular",
    padding: 5
  },
  authorText: {
    fontStyle: "normal",
    color: "#FFF",
    marginTop: 10,
    marginBottom: 50
  },
  buttonContainer: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontFamily: "Questrial-Regular"
  }
});

export { styles };
