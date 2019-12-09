import React from 'react'
import {
  Boddy,
  Title,
  SubTitle,
  Left,
  Right,
  Sociais,
  Img
} from './styles'
import MediaQuery from 'react-responsive'
import Loguinho from '../../Components/Loguinho'
import { Button } from '../../Components/Buttons/ButtonPrincipal';

const url = localStorage.getItem('url')

const openInNewTab = (url) => {
  window.open(url, '_blank');
}

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
            <Sociais>
              <Img src={"/Assets/Social/facebook.png"} onClick={() => openInNewTab('https://www.facebook.com/agenciaintegre/?ref=br_rs')} />
              <Img src={"/Assets/Social/instagram.png"} onClick={() => openInNewTab('https://www.instagram.com/agenciaintegre/')} />
              <Img src={"/Assets/logo-mobile.png"} onClick={() => openInNewTab('https://www.agenciaintegre.com.br/')} />
            </Sociais>
            <div style={{ display: 'inline-block' }}>
              <a href="/" style={{ color: 'black' }}>
                <Button> Recomeçar! </Button>
              </a>
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
          <div style={{ display: 'flex', justifyContent: 'center', margin: '5vh' }}>
            <Loguinho className="Logo" />
          </div>
          <Right url={`${url}`} />
          <Left>
            <Title>Obrigada!</Title>
            <SubTitle>Agora você também faz parte da nossa história!</SubTitle>
            <a href="/" style={{ color: 'black', margin: 30 }}>
              <Button> Recomeçar! </Button>
            </a>
            <Sociais>
              <Img src={"/Assets/Social/facebook.png"} onClick={() => openInNewTab('https://www.facebook.com/agenciaintegre/?ref=br_rs')} />
              <Img src={"/Assets/Social/instagram.png"} onClick={() => openInNewTab('https://www.instagram.com/agenciaintegre/')} />
              <Img src={"/Assets/logo-mobile.png"} onClick={() => openInNewTab('https://www.agenciaintegre.com.br/')} />
            </Sociais>
          </Left>
        </Boddy>
      </MediaQuery>
    </>
  );
}