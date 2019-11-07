import React, { useState } from 'react'
import Loguinho from '../../Components/Loguinho'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import JogoDaVelha from '../../Components/JogoDaVelha'
import {
  Body,
  Left,
  Right,
  Center,
  Content,
  Text,
  Box
} from './styles'

export default function SegundaTela() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Content>
      <Box>
        <Loguinho />
      </Box>
      <Body>
        <Left />
        <Center>
          <img className="Esquerda" src="/Assets/Frameesquerda.png" alt="" />
          <Text>
            “Nossa história é, sem dúvida, marcada por muitos desafios
            e superações, mas acima de tudo, muita dedicação e
            pioneirismo na área digital”
          </Text>
          <img className="Direita" src="/Assets/FrameDireita.png" alt="" />
        </Center>
        <Right url="/Assets/Bg/post.png" />
        <JogoDaVelha isOpen={isOpen} setOpen={setOpen} url={"/Sexta"}/>
        <Button className="btn" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
      </Body>
      <Button className="btn1" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
    </Content>
  );
}