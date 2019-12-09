import React, { useState } from 'react'
import Video from '../../Components/Videos/SegundoVideo'
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
          <div className="Logo">
            <Loguinho />
          </div>
          <Video />
        </Left>
        <Center>
          <img src="/Assets/Bg/MolasCenter.svg" alt="" />
          <Text>
            Nossa história é, sem dúvida, marcada por muitos desafios
            e superações, mas acima de tudo, muita dedicação e
            pioneirismo na área digital.
          </Text>
          <JogoDaVelha isOpen={isOpen} setOpen={setOpen} url={"/Terceira"} />
        </Center>
        <Right>
          < img src="/Assets/Bg/bg2.png" alt="" />
        </Right>
        <Button className="btn" onClick={() => setOpen(!isOpen)}> Próxima fase </Button>
      </Body>
      <Button className="btn1" onClick={() => setOpen(!isOpen)}> Próxima fase </Button>
    </Content>
  );
}