import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.vermelho}>Olá Mundo</Text>

      <View style={styles.bola}>
        <Text style={styles.bolaText}>B</Text>
      </View>

      <Image
        source={require('./assets/imagem1.jpg')}
        style={styles.img}
        resizeMode="cover"
      />

      <Image
        source={{ uri: 'https://www.google.com.br/google.jpg' }}
        style={styles.imgG}
        resizeMode="stretch"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  vermelho: {
    color: '#FF0000',
    fontSize: 24,
    textAlign: 'center',
  },
  bola: {
    width: 90,
    height: 90,
    backgroundColor: '#0000FF',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bolaText: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  img: {
    width: 380,
    height: 300,
    backgroundColor:'#FF0000'
  },
  imgG: {
    width: 300,
    height: 300,
    backgroundColor: 'FF0000'
  },
});