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
import Video from '../../Components/Videos/PrimeiroVideo'
import PrimeiroJogo from '../../Components/JogoSubtracao'

export default function TelaInicial() {
  const [isOpen, setOpen] = useState(false)
  const [result, setResult] = useState()

  return (
    <>
      <MediaQuery minDeviceWidth={1000}>
        <Boddy>
          <Left>
            <Loguinho />
            <div>
              <Title>Queremos jogar um jogo com você. Topas?</Title>
              <SubTitle>Conheça a nossa história enquanto se diverte!</SubTitle>
            </div>
            <div style={{ display: 'inline-block' }}>
              <Button onClick={() => setOpen(!isOpen)}>
                Começar!
              </Button>
            </div>
          </Left>
          <Video />
          <PrimeiroJogo
            isOpen={isOpen}
            setOpen={setOpen}
            result={result}
            setResult={setResult}
          />
        </Boddy>
      </MediaQuery>


      <MediaQuery maxDeviceWidth={700}>
        <Boddy>
          <Left>
            <Loguinho className="Loguinho" />
            <Title>Queremos jogar um jogo com você. Topas?</Title>
            <SubTitle>Conheça a nossa história enquanto se diverte!</SubTitle>
          </Left>
          <Right>
            <Video
              url="https://www.youtube.com/embed/_xKCwzgI68s"
              title="Video inicial"
            />
            <Button style={{ margin: 30 }} onClick={() => setOpen(!isOpen)}>
              Começar!
          </Button>
          </Right>
          <PrimeiroJogo
            isOpen={isOpen}
            setOpen={setOpen}
            result={result}
            setResult={setResult}
          />
        </Boddy>
      </MediaQuery>
    </>
  );
}