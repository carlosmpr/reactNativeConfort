import React from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const HorizontalScrollView = ({ children }) => {
  return (
    <ScrollView style={styles.scrollView} horizontal={true}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScrollView;

const styles = StyleSheet.create({
  scrollView: {
    width: windowWidth,
  },
});
