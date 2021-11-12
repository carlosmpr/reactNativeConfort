import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Dimensions} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
          {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  scrollview: {
    height: windowHeight,
    width: windowWidth,
    padding: 20,
  },
});
