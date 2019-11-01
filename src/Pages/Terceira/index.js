import React, { useState } from 'react'
import { Content } from './styles'
import JogoMemoria from '../../Components/JogoMemoria'
import MediaQuery from 'react-responsive'
import Desk from './Desk'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Terceira() {
  const [isOpen, setOpen] = useState(false);
  const [imagens] = useState([
    { imagem: '/Assets/Memoria/Primeira.png', descricao: 'Esse foi o primeiro crachá da Integre lá em 2009.' },
    { imagem: '/Assets/Memoria/Segunda.png', descricao: 'A sede da Integre em 2012.' },
    { imagem: '/Assets/Memoria/Terceira.png', descricao: 'O time integre começava a crescer em 2013.' },
    { imagem: '/Assets/Memoria/Quarta.png', descricao: 'Em 2014 novas pessoas entraram. Dia do Bigode' },
    { imagem: '/Assets/Memoria/Quinta.png', descricao: 'Em 2015 na nova sede da agencia.' },
    { imagem: '/Assets/Memoria/Sexta.png', descricao: 'Amamos festa.' },
    { imagem: '/Assets/Memoria/Setima.png', descricao: 'Surpresa gótica. Aniversário do Tarciso.' },
    { imagem: '/Assets/Memoria/Oitava.png', descricao: 'Pietra, filha da débora participando de uma das nossas festas' },
    { imagem: '/Assets/Memoria/Nona.png', descricao: 'Nova sede em 2018' },
    { imagem: '/Assets/Memoria/Decima.png', descricao: 'Pessoal em 2018' },
  ]);
  return (
    <Content>
      <MediaQuery maxDeviceWidth={700}>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1000}>
        <Desk imagens={imagens} />
      </MediaQuery>
      <Button style={{ marginTop: 20 }} onClick={() => setOpen(!isOpen)}> Olhei </Button>
      <JogoMemoria
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Content>
  )
}
