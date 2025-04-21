Nome: Victor Alex Moreira Gouveia 2°DS  
Data: 25/03/2025  

**1) O que são Props no React Native?**  
Props são dados passados de um componente pai para um filho. São imutáveis (não podem ser alterados pelo filho).  

Exemplo:  
// Componente Pai  
<Mensagem texto="Olá, mundo!" />  

// Componente Filho  
function Mensagem(props) {  
  return <Text>{props.texto}</Text>;  
}  

Diferença entre Props e State:  
- Props: Dados externos (recebidos do pai).  
- State: Dados internos do componente (gerenciados por useState).  

Fonte: https://react.dev/learn/passing-props-to-a-component  

---  

**2) Como o React Native gerencia imagens?**  
Formas mais comuns:  
1. Imagem local:  
   <Image source={require('./caminho/da/imagem.png')} />  

2. Imagem remota (URL):  
   <Image  
     source={{ uri: 'https://exemplo.com/imagem.jpg' }}  
     style={{ width: 200, height: 200 }}  
   />  

Diferença entre local e remota:  
- Local: Empacotada no app (rápida, sem internet).  
- Remota: Baixada em tempo real (requer conexão).  

O que considerar em diferentes telas:  
Usar flex, width: '100%' ou % para responsividade.  

Fonte: https://reactnative.dev/docs/images  

---  

**3) O que é o StyleSheet no React Native?**  
É um objeto que organiza estilos (como CSS).  

Exemplo:  
const styles = StyleSheet.create({  
  texto: {  
    fontSize: 16,  
    color: 'blue',  
  },  
});  

// Uso:  
<Text style={styles.texto}>Olá!</Text>  

Diferença entre StyleSheet.create e estilos inline:  
- StyleSheet.create: Melhor performance.  
- Inline: Útil para estilos dinâmicos.  

Fonte: https://reactnative.dev/docs/style  

---  

**4) O que são Hooks no React Native?**  
Hooks são funções que permitem usar state e recursos do React em componentes funcionais.  

Hooks comuns:  
- useState: Gerencia estado interno.  
- useEffect: Executa efeitos colaterais (ex.: chamadas API).  
- useContext: Acessa dados globais.  

Fonte: https://react.dev/reference/react  

---  

**5) O que é o useState e como ele funciona?**  
useState armazena e atualiza dados no componente.  

Exemplo:  
const [contador, setContador] = useState(0);  

// Uso:  
<Button  
  title="Aumentar"  
  onPress={() => setContador(contador + 1)}  
/>  

Diferença entre useState e useEffect:  
- useState: Gerencia estado.  
- useEffect: Controla ações após renderização.  

Fonte: https://react.dev/reference/react/useState  

---  

**Fontes Adicionais:**  
- React Native Docs: https://reactnative.dev/docs/getting-started  
- React Official Docs: https://react.dev/learn  