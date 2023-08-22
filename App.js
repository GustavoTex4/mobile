import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 10 }}>
      <Botoes/>
      <Card titulo ="Sem conteúdo"></Card>
      <Card titulo ="Mobile"></Card>
      <Text>React native</Text>
      
      <Card titulo ="Principal" nome="orion">
      <Text>Paragrafo 1</Text>
      <Text>Paragrafo 2</Text>
      <Text>Paragrafo 3</Text>
      <Button title='Detalhes'/>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
