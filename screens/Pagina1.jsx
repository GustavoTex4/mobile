import React from 'react'
import { Button, Text } from 'react-native'
import Botoes from '../components/Botoes'
import Card from '../components/Card'

const Pagina1 = ({ navigation }) => {


  return (
    <>
      <Button title='Pagina 2' onPress={() => navigation.navigate('pagina2')} />
      <Button title='Pagina 3' onPress={() => navigation.navigate('pagina3')} />
      <Card titulo="Sem conteúdo"></Card>
      <Card titulo="Mobile"></Card>
      <Text>React native</Text>
      <Card titulo="Principal" nome="orion">
        <Text>Paragrafo 1</Text>
        <Text>Paragrafo 2</Text>
        <Text>Paragrafo 3</Text>
        <Button title='Detalhes' />
      </Card>
      <Botoes />


    </>
  )
}
export default Pagina1