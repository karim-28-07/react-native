import React, { useState } from 'react';

import { Button, StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, } from 'react-native';


export default function App() {


  const [showLoading, setShowloading] = useState(false)


  return (

    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={{ width: 315, height: 100, margin: "auto" }} />
        <Image source={require("./src/images/konexio-logo_1.png")}
          style={{ width: 315, height: 100, margin: "auto" }} />

        <Text style={styles.title1}>Good-Morning</Text>
        <Text style={styles.title2}>Hello World</Text>
        <Text style={styles.title3}>How are you ?</Text>

        <Button style={styles.button}

          onPress={() => {
            alert('Hello, what is your Name ?'); setShowloading(!showLoading)
          }}
          title="Clique Me" />

        {showLoading && <ActivityIndicator size="small" color="#0000ff" />}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'blue',
    width: 400,


  },
  title: {
    backgroundColor: "white",
    textAlign: "center",
    marginTop: 80,
    width: 400,
  },
  title1: {


    fontSize: 30,
    fontWeight: "bold",

  },
  title2: {

    fontSize: 30,
    fontWeight: "bold",

  },
  title3: {

    fontSize: 30,
    fontWeight: "bold",

  },
  text: {
    fontSize: 40
  },
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100
  }
});
