import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const SearchBar = () => {
    return (
        <View style={styles.container}>
        <View style={styles.search}>
         
          <TextInput style={{ flex: 1, marginLeft: 5 }} placeholder="Search for aparment"/>
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    search: {
        padding: 15,
        backgroundColor: "#F8F8FA",
        display: "flex",
        flexDirection: "row",
        borderRadius: 15,
      },

      container: {
        
        width: '100%',
        marginVertical:20
      },
})
