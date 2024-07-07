//import liraries
import React from 'react';
import { View, Text, StyleSheet,Platform,FlatList,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CartListItem from '@/components/CartListItem';

import { useCart } from '@/providers/CartProvider';

// create a component
const CartScreen = () => {
    const {items,total}=useCart()
    return (
        <View style={styles.container}>
            <FlatList
             data={items}
              renderItem={({item})=> <CartListItem cartItem={item}/>}
              contentContainerStyle={{gap:10}}
             />
<Text  style={{marginTop:20,fontSize:20,fontWeight:'600'}}>Total :${total}</Text>
<Button title='Checkout' />
            
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CartScreen;
