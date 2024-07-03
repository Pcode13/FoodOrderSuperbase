import { StyleSheet, Image, Text, View } from 'react-native';

import products from '@assets/data/products';
import Colors from '@/constants/Colors';
import ProductListItem from '@components/ProductListItem'


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <ProductListItem product={products[5]}/>
     <ProductListItem product={products[1]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});
