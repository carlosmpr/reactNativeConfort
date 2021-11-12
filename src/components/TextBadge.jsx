import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBadge = ({ text, active }) => {
  const styles = StyleSheet.create({
    badge: {
      backgroundColor: active ? "black" : "white",
      padding: 10,
      borderRadius: 20,
    },
    text: { color: active ? "white" : "black" },
  });

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextBadge;
