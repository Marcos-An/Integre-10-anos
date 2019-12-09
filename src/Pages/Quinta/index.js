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
            Você já ouviu dizer que todo Pokémon evolui? Foi assim com a nossa logo!
            Conheça todas as versões dela ao longo dos anos: Em 2009, esse era o logo da
             Integre Web marketing & Comunicação. Inspirado nos "dois mundos" apresentados no
             filme Matrix, as cores azul e vermelha representam a perfeita conexão entre o
             real e o virtual. No ano de 2011, essa era a nossa identidade: o vermelho e
             azul dão lugar ao verde. Assim como o nosso nome, que passa a se chamar Integre
             Criativa, a ideia principal do logo é o olho, olhando para o alto como se
             estivesse tendo uma ideia ou uma visão de futuro. Em 2013 mudamos mais uma vez, pois
              o futuro que enxergamos no logo anterior chegou rápido. O olho permaneceu mas
              se tornou flat, ganhou um pin de localização e pernas para percorrer o caminho
              que tínhamos a frente. Em 2016, chegamos à versão atual do nosso logo.
              Dessa vez foram apenas ajustes nos detalhes, equilibrando as formas e acertando
              as cores, que agora tem o efeito duotone.
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