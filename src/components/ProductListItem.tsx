import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
