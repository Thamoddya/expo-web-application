// landing.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Landing Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
