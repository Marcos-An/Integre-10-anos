import React, { useState } from 'react'
import Video from '../../Components/Video'
import Loguinho from '../../Components/Loguinho'
import JogoDaVelha from '../../Components/JogoDaVelha'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import MediaQuery from 'react-responsive'
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
        <MediaQuery minDeviceWidth={1500}>
          <Loguinho className="Loguinho" top="6%" />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1000} maxDeviceWidth={1400}>
          <Loguinho className="Loguinho" top="4%" />
        </MediaQuery>
        <Left>
          <MediaQuery maxDeviceWidth={700}>
            <Loguinho className="Loguinho" top="0%" />
          </MediaQuery>
          <Video
            url="https://www.youtube.com/embed/xMHP6xzSxP8"
            title="Video inicial"
          />
        </Left>
        <Center>
          <img src="/Assets/setaVermelha.png" alt="" />
          <Text>
            “Nossa história é, sem dúvida, marcada por muitos desafios
            e superações, mas acima de tudo, muita dedicação e
            pioneirismo na área digital”
          </Text>
          <JogoDaVelha isOpen={isOpen} setOpen={setOpen} />
        </Center>
        <Right url="/Assets/Bg/bg2.png" />
        <Button className="btn" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
      </Body>
      <Button className="btn1" onClick={() => setOpen(!isOpen)}> Próximo jogo </Button>
    </Content>
  );
}