import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'; 
import { UserItem } from './user-item' 
 
type User = { 
  id: number; 
  nome: string; 
  idade: number; 
} 
 
function App() { 
  let list = [ 
    {id:1, nome: 'João', idade: 20},  
    {id:2, nome: 'Pedro', idade: 30},  
    {id:3, nome: 'Maria', idade: 40},  
    {id:4, nome: 'Josefina', idade: 50},  
  ]; 
  return ( 
    <SafeAreaView style={styles.container}> 
      {/* {list.map((user) => ( 
          <UserItem key={user.id} nome={user.nome} idade={user.idade} id={user.id}/> 
        ))} */}
 
        <FlatList  
            data={list} 
            renderItem={({ item } : { item : User}) => (<UserItem  nome={item.nome} 
            idade={item.idade} id={item.id} />)} 
            keyExtractor={item => item.id.toString()} 
         /> 
    </SafeAreaView> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
  }, 
}); 
 
export default App; 
 
 
 
 
 
 
