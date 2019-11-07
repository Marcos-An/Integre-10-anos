import React, { useState } from 'react'
import { Content } from './styles'
import JogoMemoria from '../../Components/JogoMemoria'
import Desk from './Desk'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Terceira() {
  const [isOpen, setOpen] = useState(false);
  const [imagens] = useState([
    { imagem: '/Assets/Memoria/08.jpg', descricao: 'Esse foi o primeiro crachá da Integre lá em 2009.' },
    { imagem: '/Assets/Memoria/02.jpg', descricao: 'A sede da Integre em 2012.' },
    { imagem: '/Assets/Memoria/Terceira.jpg', descricao: 'O time integre começava a crescer em 2013.' },
    { imagem: '/Assets/Memoria/Quarta.jpg', descricao: 'Em 2014 novas pessoas entraram. Dia do Bigode.' },
    { imagem: '/Assets/Memoria/Quinta.jpg', descricao: 'Em 2015, na nova sede da agencia.' },
    { imagem: '/Assets/Memoria/Sexta.jpg', descricao: 'Amamos festa.' },
    { imagem: '/Assets/Memoria/Setima.jpg', descricao: 'Surpresa gótica. Aniversário do Tarciso.' },
    { imagem: '/Assets/Memoria/Oitava.jpg', descricao: 'Pietra participando de uma das nossas festas' },
    { imagem: '/Assets/Memoria/Nona.jpg', descricao: 'Nova sede em 2018.' },
    { imagem: '/Assets/Memoria/Decima.jpg', descricao: 'Se tem escada, tem que ter close.' },
  ]);
  return (
    <Content>
      <Desk imagens={imagens} />
      <Button className='btn' onClick={() => setOpen(!isOpen)}> Olhei </Button>
      <JogoMemoria
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Content>
  )
}
