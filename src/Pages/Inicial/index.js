import React, { useState } from 'react'
import {
  Boddy,
  Title,
  SubTitle,
  Left,
  Right
} from './styles'
import { Button } from '../../Components/Buttons/ButtonPrincipal';
import Video from '../../Components/Video'
import PrimeiroJogo from '../../Components/JogoSubtracao'


export default function TelaInicial() {
  const [isOpen, setOpen] = useState(false)
  const [result, setResult] = useState()

  return (
    <Boddy>
      <Left>
        <Title>Queremos jogar um jogo com você. Topas?</Title>
        <SubTitle>Conheça a nossa história enquanto se diverte!</SubTitle>
        <Button onClick={() => setOpen(!isOpen)}>
          Começar!
        </Button>
      </Left>
      <Right>
        <Video
          url="https://www.youtube.com/embed/xMHP6xzSxP8"
          title="Video inicial"
        />
      </Right>
      <PrimeiroJogo
        isOpen={isOpen}
        setOpen={setOpen}
        result={result}
        setResult={setResult}
      />
    </Boddy>
  );
}