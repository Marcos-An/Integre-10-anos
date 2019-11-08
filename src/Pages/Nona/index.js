import React from 'react'
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

const url = localStorage.getItem('url')
export default function TelaInicial() {

  return (
    <>
      <MediaQuery minDeviceWidth={1000}>
        <Boddy>
          <Left>
            <Loguinho />
            <div>
              <Title>Obrigada!</Title>
              <SubTitle>Agora você também faz parte da nossa história!</SubTitle>
            </div>
            <div style={{ display: 'inline-block' }}>
              <Button>
                Começar!
              </Button>
            </div>
          </Left>
          <Right url={`${url}`}>
            <MediaQuery maxDeviceWidth={700}>
              <Loguinho />
            </MediaQuery>
          </Right>
        </Boddy>
      </MediaQuery>


      <MediaQuery maxDeviceWidth={700}>
        <Boddy>
          <Left>
            <Loguinho className="Loguinho" />
            <Title>Obrigada!</Title>
            <SubTitle>Agora você também faz parte da nossa história!</SubTitle>
          </Left>
          <Right url={`${url}`}>
            <Button style={{ margin: 30 }}>
              Começar!
            </Button>
          </Right>
        </Boddy>
      </MediaQuery>
    </>
  );
}