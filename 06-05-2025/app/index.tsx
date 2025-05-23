import { useState } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, StatusBar } from "react-native";
import { Link, Stack, Tabs } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>

      {/*Configurações base da tela*/}
      <StatusBar hidden={false} barStyle={'light-content'} backgroundColor={'black'}/>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'minha página'
        }}
      />

      <Text>Tela inicial 🎭</Text>
      <Link href="/site" style={styles.LinkBTN}>Ir para /site </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 5,
    margin: 5, 

    borderColor: 'black',
    borderWidth: 2
  },

  LinkBTN:{
    padding: 5,
    color: '#0066FF',
    borderColor: '#808080',
    borderWidth: 1,
    width: 120,
    textAlign: 'center',
    borderRadius: 5
  }
});