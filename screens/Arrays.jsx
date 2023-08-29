import React from 'react'
import { Text } from 'react-native'

const Arrays = () => {

    const carros = ['Fusca', 'Celta', 'Palio', 'Gol', 'Ka']

    const carro = {marca:'VW',Modelo:'Fusca',Ano:1975, cor:'Preto', Foto:''}





  return (
    <>
    {carros.map(item => (
        <Text>{item}</Text>
    ))}

    <Text>{carros[0]}</Text>
    
    </>
  )
}

export default Arrays