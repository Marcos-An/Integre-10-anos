import React, { useState } from 'react'
import Video from '../../Components/Video'
import JogoDaVelha from '../../Components/JogoDaVelha'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import {
  Body,
  Left,
  Right,
  Center,
  Content,
  Text
} from './styles'

export default function SegundaTela() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Content>
      <Body>
        <Left>
          <Video
            url="https://www.youtube.com/embed/xMHP6xzSxP8"
            title="Video inicial"
          />
        </Left>
        <Center>
          <Text>
            “Nossa história é, sem dúvida, marcada por muitos desafios
            e superações, mas acima de tudo, muita dedicação e
            pioneirismo na área digital”
          </Text>
          <JogoDaVelha isOpen={isOpen} setOpen={setOpen} />
        </Center>
        <Right>
          <h1>Imagem</h1>
        </Right>
      </Body>
      <Button onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
    </Content>
  );
}