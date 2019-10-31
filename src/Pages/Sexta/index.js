import React, { useState } from 'react'
import { Content, Fotos, Foto, Text } from './styles'
import MediaQuery from 'react-responsive'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

var indexVelho = ''
const Local = (item, index) => {

  if (indexVelho !== '' && indexVelho !== index) {
    document.getElementById(indexVelho).style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.15)"
    document.getElementById(index).style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.30)"
    localStorage.setItem('url', item)
  }
  if (index !== indexVelho) {
    document.getElementById(index).style.boxShadow = "0px 0px 8px 0px rgba(61,193,76,0.90)"
    indexVelho = index
    console.log(index);
    console.log(indexVelho);
    localStorage.setItem('url', item)
  }
}
export default function Terceira() {
  const [imgs] = useState([
    "/Assets/Meme/cabeca1.png",
    "/Assets/Meme/cabeca2.jpeg",
    "/Assets/Meme/cabeca1.png",
    "/Assets/Meme/cabeca2.jpeg",
    "/Assets/Meme/cabeca1.png",
    "/Assets/Meme/cabeca2.jpeg",
    "/Assets/Meme/cabeca1.png",
    "/Assets/Meme/cabeca2.jpeg",
    "/Assets/Meme/cabeca1.png",
    "/Assets/Meme/cabeca2.jpeg",
  ])

  return (
    <Content>
      <Text> Esses memes são Épicos. Escolha seu preferido </Text>
      <MediaQuery maxDeviceWidth={700}>
        <Fotos>
          {
            imgs.map(item => <Foto url={item} />)
          }
        </Fotos>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1000}>
        <Fotos>
          {
            imgs.map((item, index) => <Foto id={`${index}`} onClick={() => Local(item, index)} url={item} />)
          }
        </Fotos>
      </MediaQuery>
      <a href="/Setima" style={{ color: 'black' }}>
        <Button>Próximo</Button>
      </a>
    </Content>
  )
}