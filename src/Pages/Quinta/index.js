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
            Você já ouviu dizer que todo Pokémon evolui? Foi assim com a nossa logo! Conheça todas as versões dela ao longo dos anos.
          </Text>
          <img className="Direita" src="/Assets/FrameDireita.png" alt="" />
        </Center>
        <Right url="/Assets/Bg/post.png" />
        <JogoDaVelha isOpen={isOpen} setOpen={setOpen} url={"/Setima"} />
        <Button className="btn" onClick={() => setOpen(!isOpen)}> Próxima fase  </Button>
      </Body>
      <Button className="btn1" onClick={() => setOpen(!isOpen)}> Próxima fase  </Button>
    </Content>
  );
}