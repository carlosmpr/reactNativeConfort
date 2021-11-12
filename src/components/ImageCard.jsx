import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const ImageCard = ({ image, title, extra, active }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{extra}</Text>
        </View>
        <View style={styles.icon}>
          <FontAwesome name="heart" size={12} color= {active? "red": "gray"} />
        </View>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  card: {
    width: 190,
    height: 180,
    backgroundColor: "red",
    borderRadius: 25,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    marginRight:10
  },

  image: { width: "100%", height: "100%", position: "absolute" },

  content: {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0,1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  subTitle: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0,1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold",
    fontSize: 10,
  },

  icon: { padding: 10, backgroundColor: "white", borderRadius: 20 },
});
