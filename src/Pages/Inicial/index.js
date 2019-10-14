import React, { useState } from 'react'
import {
  Boddy,
  Title,
  SubTitle,
  Left,
  Right
} from './styles'
import { Button } from '../../Components/Buttons/ButtonPrincipal';
import PrimeiroJogo from '../../Components/JogoSubtracao'


export default function TelaInicial() {
  const [isOpen, setOpen] = useState(false)
  const [result, setResult] = useState(0)

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
        <iframe
          title="Vídeo"
          className="Youtube"
          src="https://www.youtube.com/embed/xMHP6xzSxP8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
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