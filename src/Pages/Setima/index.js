import React, { useState } from 'react'
import { Content } from './styles'
import Desk from './Desk'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Terceira() {
  const [choosed, setChoosed] = useState(false)
  const [imagens] = useState([
    '/Assets/Meme/02.jpg',
    '/Assets/Meme/03.jpg',
    '/Assets/Meme/04.jpg',
    '/Assets/Meme/05.jpg',
    '/Assets/Meme/06.jpg',
    '/Assets/Meme/07.jpg',
    '/Assets/Meme/08.jpg',
    '/Assets/Meme/09.jpg',
    '/Assets/Meme/10.jpg',
    '/Assets/Meme/11.jpg',
  ]);
  return (
    <Content>
      <Desk imagens={imagens} setChoosed={setChoosed} />
      {
        choosed === true &&
        <a href="/Oitava" style={{ color: 'black' }}>
          <Button className="btn"> Escolhi </Button>
        </a>
      }
    </Content>
  )
}
