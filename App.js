import React, { Component } from "react";
import { View, Text, Image, StyleSheet, StatusBar, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';


class HomeScreen extends Component {

  render() {

    return (
      <View style={styles.container}>

      <Header 
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}

          leftComponent={{ icon: 'home', color: '#282C34' }}
          centerComponent={{
            text: 'Home',
            style: { fontWeight: "bold", color: '#000', fontSize: 18, alignSelf: "flex-start" }
          }}
        /> 

        <StatusBar translucent backgroundColor="black" />
         <Text style={{ width: "90%", textAlign: "center", marginTop: "8%", color: "white", fontSize: 20 }}>React Native</Text> 
        <View style={{
          borderBottomColor: 'lightgrey', width: "90%",
          borderBottomWidth: 0.5,
          marginLeft: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingBottom: 10,
          marginBottom: "8%",
          marginRight: 5
        }}></View>

        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.ibb.co/GJN88pP/1280px-React-icon-svg.png',
          }}
        /> 

      </View>
    );
  }
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#282C34',
  },
  tinyLogo: {
    width: 180,
    alignSelf: "center",
    height: 180,
  }, icon: {
    paddingLeft: 10,
    alignSelf: "center",

  },

  headerbg: {
    fontWeight: "bold", color: '#000', fontSize: 18, alignSelf: "flex-start" 
  },
});
