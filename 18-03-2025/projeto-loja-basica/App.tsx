import { View, SafeAreaView, StatusBar, StyleSheet, Image, Text, FlatList, Button } from "react-native";
import { list } from "./data";
import { ProductItem } from "./components/product-item";
import { Product } from "./type/Product";

const handleAddToCard = () => {
  alert("Você está comprando o produto:" + props.product.name);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./assets/hero.jpg')}
        resizeMode="cover"
        style={styles.hero}
      />

      <View style={styles.info}>

        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>R${props.product.price.toFoxed(2)}</Text>

        <Button
          title="Comprar"
          onPress={handleAddToCard}
        />

        <FlatList
          data={list}
          renderItem={({item}: {item: Product}) => (<ProductItem/>)}
          keyExtractor={item => item.id.toString()}
        />
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20
  },

  image: {
    width: 100,
    height: 100
  },
  info: {
    flex: 1,
    marginLeft: 20
  },
  name: {
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 10
  },
  price: {
    color: '#FF0000',
    fontSize: 16,
    marginBottom: 10
  },
  hero: {
    width: '100%',
    height: 120
  }
});