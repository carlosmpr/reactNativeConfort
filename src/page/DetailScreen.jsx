import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Page from "../components/Page";
import aprt from "../../assets/apart4.jpg";
import { FontAwesome, Entypo, AntDesign,Ionicons } from "@expo/vector-icons";
import MainCard from "../components/MainCard";
import location from "../../assets/location.jpeg"
const DetailScreen = () => {
  return (
    <View>
      <View style={{ width: "100%", height: 300 }}>
        <Image source={aprt} style={{ width: "100%", height: "100%" }} />
      </View>
      <Page>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>
          Jhon Jeen Apartments
        </Text>
        <View style={styles.formatter}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text>Manhattan, USA</Text>
        </View>
        <View style={{marginVertical:10}}></View>
          <Text style={{fontSize:18, fontWeight:'500'}}>Description</Text>
          <View style={{marginVertical:10}}></View>
          <Text style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <View style={{marginVertical:10}}></View>
          <Text style={{fontSize:18, fontWeight:'500'}}>Features</Text>
          <View style={{marginVertical:10}}></View>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', width:'12%', justifyContent:'space-between'}}>
          <Entypo name="air" size={16} color="black" />
          <Text>AC</Text>
          </View>
          <View style={{marginVertical:10}}></View>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', width:'12%', justifyContent:'space-between'}}>
          <AntDesign name="wifi" size={16} color="black" />
          <Text>Wifi</Text>
          </View>

          <View style={{marginVertical:10}}></View>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', width:'20%', justifyContent:'space-between'}}>
          <Ionicons name="ios-bed-outline" size={16} color="black" />
          <Text>3 Rooms</Text>
          </View>

          <View style={{marginVertical:10}}></View>
       
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', width:'18%', justifyContent:'space-between'}}>
          <FontAwesome name="bath" size={16} color="black" />
          <Text>2 Bath</Text>
          </View>
          <View style={{marginVertical:10}}></View>
          <Text style={{fontSize:18, fontWeight:'500'}}>Locations</Text>
          <View style={{marginVertical:10}}></View>
         
          <MainCard image={location} price="3,500"/>
          <Button title="Contact" />
          <View style={{height:200}}></View>
      </Page>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  formatter: { display: "flex", flexDirection: "row", alignItems: "center" },
});
