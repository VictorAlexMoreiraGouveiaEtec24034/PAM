import { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, TextInput } from "react-native";

export default function APP() {
  const [campo, setCampo] = useState("Test");
  const mostrar = () => {
    alert(campo);
  }

  return(
    <SafeAreaView>
      <TextInput style={styles.input} value={campo} onChangeText={t => setCampo(t)}/>

      // <Button title="O que foi digitado" onPress={mostrar}/>
      <Text>Você digitou: {campo}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
  },
});