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
import { ButtonInicio } from '../../Components/Buttons/ButtonPrincipal';
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
              <SubTitle>Como deu pra notar, queremos jogar com você. Bora?</SubTitle>
            </div>
            <div style={{ display: 'inline-block' }}>
              <ButtonInicio onClick={() => setOpen(!isOpen)}>
                Começar!
              </ButtonInicio>
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


      <MediaQuery maxDeviceWidth={800}>
        <Boddy>
          <Left>
            <Loguinho className="Loguinho" />
            <Title>Queremos jogar um jogo com você. Topas?</Title>
            <SubTitle>Como deu pra notar, queremos jogar com você. Bora?</SubTitle>
          </Left>
          <Right>
            <Video />
            <ButtonInicio style={{ margin: 30 }} onClick={() => setOpen(!isOpen)}>
              Começar!
          </ButtonInicio>
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