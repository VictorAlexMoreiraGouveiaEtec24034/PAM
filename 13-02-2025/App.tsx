import {Text, View} from "react-native";

type Props = {
  name: string,
  age: number
}

let dado: Props = {
  name: "Victor Alex",
  age: 17
}

export default function HomePag(Props: Props){
  return(
    <View>
      <Text>Olá {dado.name} minha ideda é {dado.age}</Text>
    </View>
  );
};