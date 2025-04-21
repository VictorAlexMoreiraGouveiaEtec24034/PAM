import { View, Text, StyleSheet } from 'react-native' 
 
type Props = { 
  nome: string; 
  idade: number; 
  id: number; 
} 
 
export const UserItem = (props: Props) => { 
  return ( 
    <View style={styles.container}> 
        <Text style={styles.big}>{props.nome}</Text> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
   margin: 10 
  }, 
  big: { 
    fontSize: 28 
  } 
});