import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Tap to start a bill payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("moneygram", () => App);
