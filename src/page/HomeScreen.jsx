import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Page from "../components/Page";
import avatar from "../../assets/avatar.png";
import SearchBar from "../components/SearchBar";
import aprt from "../../assets/apartment.jpg";
import aprt2 from "../../assets/apart2.jpg";
import aprt3 from "../../assets/apart3.jpg";
import aprt4 from "../../assets/apart4.jpg";
import HorizontalScrollView from "../components/HorizontalScrollView";
import ImageCard from "../components/ImageCard";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import MainCard from "../components/MainCard";

const data = [
  {
    image: aprt,
    title: "Jhon Jeen",
    extra: "10 places available",
  },
  {
    image: aprt2,
    title: "Jeen Jhon",
    extra: "20 places available",
    active: true,
  },

  {
    image: aprt3,
    title: "Katy",
    extra: "25 places available",
  },

  {
    image: aprt4,
    title: "Mali",
    extra: "50 places available",
  },
];



const data2 = [
    {
      image: aprt,
      name: "Jhon Jeen",
      location: "Manhattan,USA",
      price:"5,000"
    },
    {
      image: aprt2,
      name: " Jeen Jhon",
      location: "New Jersey,USA",
      price:"4,000",
      active: true,
    },
  
    {
      image: aprt3,
      name: "Katy",
      location: "Boston,USA",
      price:"2,000",
    },
  
    {
      image: aprt4,
      name: "Mali",
      location: "Hawai,USA",
      price:"3,000",
    },
  ];

const active = false;
const HomeScreen = () => {
  return (
    <Page>
      <View style={styles.header}>
        <FontAwesome name="bell" size={24} color="black" />
        <Image source={avatar} />
      </View>

      <View style={styles.space}>
        <Text style={styles.heading}>Welcome Jhon Doe</Text>
        <Text>Ready to start your search!</Text>
      </View>

      <SearchBar />

      <Text style={styles.heading}>Features</Text>
      <View style={styles.space}></View>
      <HorizontalScrollView>
        {data.map((item) => (
          <ImageCard {...item} key={item.title} />
        ))}
      </HorizontalScrollView>

      <View style={styles.space}></View>
      <Text style={styles.heading}>Discover Places</Text>
      <View style={styles.space}></View>
            {data2.map((item) => <MainCard {...item} key={item.location}/>)}
   
    </Page>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  space: {
    marginVertical: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
  },

 
});
