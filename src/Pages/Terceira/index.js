import React from 'react'
import { Content, Fotos, Foto, Text } from './styles'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Terceira() {
  return (
    <Content>
      <Text> Acho melhor dar uma boa olhada nas imagens... </Text>
      <Fotos>
        <Foto url={"../../Public/Assets/cabeca-tarciso.png"} />
        <Foto />
        <Foto />
        <Foto />
        <Foto />

        <Foto />
        <Foto />
        <Foto />
        <Foto />
        <Foto />
      </Fotos>
      <Button> Olhei </Button>
    </Content>
  )
}
