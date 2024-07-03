import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
  } from 'react-native';
  import React, { useState } from 'react';
  import { Stack, useLocalSearchParams } from 'expo-router';
  

  
  const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
  
  
    return (
      <View style={styles.container}>
        <Stack.Screen options={{title:"Details" + id}}/>
<Text>Producat :{id}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      flex: 1,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      alignSelf: 'center',
    },
    subtitle: {
      marginVertical: 10,
      fontWeight: '600',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 'auto',
    },
  
    sizes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    size: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sizeText: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
    },
  });
  
  export default ProductDetailsScreen;