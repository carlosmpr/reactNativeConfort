import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const MainCard = ({ image, name, location, price, active }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={{ padding: 10 }}>
          <View style={styles.icon}>
            <FontAwesome
              name="heart"
              size={12}
              color={active ? "red" : "gray"}
            />
          </View>
        </View>
      </View>
      <View style={styles.padding}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.formatter}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text>{location}</Text>
        </View>
        <Text style={styles.price}>${price}/USD</Text>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  card: { width: "100%", overflow: "hidden" },

  content: {
    width: "100%",
    height: 170,
    backgroundColor: "red",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
  },

  image: { width: "100%", height: "100%", position: "absolute" },
  icon: { padding: 10, backgroundColor: "white", borderRadius: 20, width: 35 },
  padding: { padding: 15 },
  title: { fontSize: 16, fontWeight: "600" },

  formatter: { display: "flex", flexDirection: "row", alignItems: "center" },
  price: { color: "red", marginLeft: 5 },
});
