import { View, SafeAreaView, StyleSheet, StatusBar, ScrollView} from 'react-native';

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.azul}></View>
        <View style={styles.verde}></View>
        <View style={styles.amarelo}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
  scroll: {
    flex: 1,
  },

  azul: {
    width: 100,
    height: 500, 
    backgroundColor: '#0000FF',
  },

  verde: {
    width: 100,
    height: 500,
    backgroundColor: '#00FF00',
  },
  
  amarelo: {
    width: 100,
    height: 500,
    backgroundColor: '#FFFF00',
  }
});