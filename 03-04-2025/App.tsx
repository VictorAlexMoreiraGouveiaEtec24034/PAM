import { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const [areaShow, setAreaShow] = useState(false);
  const handleClick = () => {
    setAreaShow(!areaShow);
  }

  return(
    <SafeAreaView style={styles.container}>
      <Button title="Apareça / Desapareça" onPress={handleClick}/>
      { areaShow && 
        <View style={styles.area}>
          <Text style={styles.areaText}></Text>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  area: {
    margin: 20,
    padding: 20,
    backgroundColor: '#333333',
    borderRadius: 10,
  },
  areaText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
});