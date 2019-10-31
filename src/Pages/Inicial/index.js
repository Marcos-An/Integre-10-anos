import React, { useState } from 'react'
import {
  Boddy,
  Title,
  SubTitle,
  Left,
  Right,
} from './styles'
import MediaQuery from 'react-responsive'
import Loguinho from '../../Components/Loguinho'
import { Button } from '../../Components/Buttons/ButtonPrincipal';
import Video from '../../Components/Video'
import PrimeiroJogo from '../../Components/JogoSubtracao'
export default function TelaInicial() {
  const [isOpen, setOpen] = useState(false)
  const [result, setResult] = useState()

  return (
    <Boddy>
      <MediaQuery minDeviceWidth={1000}>
        <Loguinho className="Loguinho" />
      </MediaQuery>
      <Left>
        <Title>Queremos jogar um jogo com você. Topas?</Title>
        <SubTitle>Conheça a nossa história enquanto se diverte!</SubTitle>
        <Button style={{ marginBottom: 20 }} onClick={() => setOpen(!isOpen)}>
          Começar!
          </Button>
      </Left>
      <Right>
        <MediaQuery maxDeviceWidth={700}>
          <Loguinho className="Loguinho" />
        </MediaQuery>
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