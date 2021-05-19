import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Text, View, Image } from 'react-native'

export default function List() {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        const url = "http://restcountries.eu/rest/v2/all"
        fetch(url)
            .then(response => response.json())
            .then(datacountries => {

                console.log("List datacountries", datacountries);

                setCountries(datacountries)

            })
            .catch(err => console.error(err))

    }, [])

    console.log("countries", countries);

    const renderItem = ({ item }) => (
        <View style={styles.container2} >
            <Image
                source={{ uri: item.flag }}
                style={{ resizeMode: 'center', width: 300, height: 100, margin: 30 }} />
            <Text style= {styles.text1}>Country : {item.name}</Text>   
            <Text style= {styles.text2}>Capital : {item.capital}</Text>
        </View>
    );

    return (
        <div>
            <h1>Countries</h1>
            <FlatList data={countries}
                renderItem={renderItem}
                keyExtractor={item => item.capital} />
        </div>
    )
}
const styles = StyleSheet.create({
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
        fontSize : 20,
        fontWeight : 'bold'
    },
    text2:{
        fontSize : 20,
        fontWeight : 'bold'
    }
  });
  