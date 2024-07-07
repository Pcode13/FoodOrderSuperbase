//import liraries
import React from 'react';
import { View, Text, StyleSheet,Platform,FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CartListItem from '@/components/CartListItem';

import { useCart } from '@/providers/CartProvider';

// create a component
const CartScreen = () => {
    const {items}=useCart()
    return (
        <View style={styles.container}>
            <FlatList
             data={items}
              renderItem={({item})=> <CartListItem cartItem={item}/>}
              contentContainerStyle={{padding:10,gap:10}}
             />

            <Text>CartScreen{items.length}</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CartScreen;
