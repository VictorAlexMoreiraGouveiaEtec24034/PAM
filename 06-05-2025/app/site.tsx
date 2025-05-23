import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Site() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Você está em /site</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
