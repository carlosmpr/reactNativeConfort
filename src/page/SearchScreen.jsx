import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Page from "../components/Page";
import TextBadge from "../components/TextBadge";
import aprt from "../../assets/apartment.jpg";
import aprt2 from "../../assets/apart2.jpg";
import aprt3 from "../../assets/apart3.jpg";
import aprt4 from "../../assets/apart4.jpg";
import MainCard from "../components/MainCard";
const data = [
  { text: "Manhattan", active: true },
  { text: "Bronx", active: false },
  { text: "Queens", active: false },
  { text: "Brooklyn", active: false },
  { text: "Staten Island", active: false },
  { text: "Jersey City", active: false },
  { text: "Long Island", active: false },
];

const data2 = [
  {
    image: aprt,
    name: "Jhon Jeen",
    location: "Manhattan,USA",
    price: "5,000",
  },
  {
    image: aprt2,
    name: " Jeen Jhon",
    location: "New Jersey,USA",
    price: "4,000",
    active: true,
  },

  {
    image: aprt3,
    name: "Katy",
    location: "Boston,USA",
    price: "2,000",
  },

  {
    image: aprt4,
    name: "Mali",
    location: "Hawai,USA",
    price: "3,000",
  },
];
const SearchScreen = () => {
  return (
    <Page>
      <Text style={{ marginVertical: 20 }}>Search Places</Text>
      <HorizontalScrollView>
        {data.map((item) => (
          <TextBadge key={item.text} {...item} />
        ))}
      </HorizontalScrollView>
      <View style={{ marginVertical: 20 }}></View>
      {data2.map((item) => (
        <MainCard key={item.name} {...item} />
      ))}

      <View style={{height:200}}></View>
    </Page>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
