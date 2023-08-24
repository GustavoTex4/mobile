import React from 'react'
import { Button, Text } from 'react-native'
import Botoes from '../components/Botoes'
import Card from '../components/Card'

const Pagina1 = () => {
  return (
    <>
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
    
    
    
    </>
  )
}
export default Pagina1