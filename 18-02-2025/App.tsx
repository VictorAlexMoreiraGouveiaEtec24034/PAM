import {View, Text, StyleSheet, Image} from 'react-native';

export default function paghome(){
  return(
    
    <Text style={styles.vermelho}>Olá Mundo</Text>
    <View style={styles.bola}>
      <Text style={styles.bolaText}>B</Text>

      <Image
        source={require('./assets/image.jpg')}
        style={styles.img}
        resizeMode="cover"
      />

      <Image
        source={{url: 'https://www.google.com.br/google.jpg'}}
        style={styles.imgG}
        resizeMode="stretch"/>
    </View>
  );
}