import React from 'react'
import { Content, Text } from './styles'
import { Button } from '../Buttons/ButtonPrincipal'

export default function Compartilhado(props) {
  return (
    <Content>
      <Text> Obrigado por Compartilhar </Text>
      <a href="/Quinta" style={{ color: 'black' }}>
        <Button >Continuar</Button>
      </a>
    </Content>
  )
}