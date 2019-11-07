import React, { useState } from 'react'
import Video from '../../Components/Video'
import Loguinho from '../../Components/Loguinho'
import JogoDaVelha from '../../Components/JogoDaVelha'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import {
  Body,
  Left,
  Right,
  Center,
  Content,
  Text,
} from './styles'

export default function SegundaTela() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Content>
      <Body>
        <Left>
          <div>
            <Loguinho />
          </div>
          <Video
            url="https://www.youtube.com/embed/_xKCwzgI68s"
            title="Video inicial"
          />
        </Left>
        <Center>
          <img src="/Assets/Bg/MolasCenter.svg" alt="" />
          <Text>
            “Nossa história é, sem dúvida, marcada por muitos desafios
            e superações, mas acima de tudo, muita dedicação e
            pioneirismo na área digital”
          </Text>
          <JogoDaVelha isOpen={isOpen} setOpen={setOpen} url={"/Terceira"}/>
        </Center>
        <Right url="/Assets/Bg/bg2.png" />
        <Button className="btn" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
      </Body>
      <Button className="btn1" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
    </Content>
  );
}