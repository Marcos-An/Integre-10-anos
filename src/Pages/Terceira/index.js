import React, { useState } from 'react'
import { Content, Fotos, Foto, Text } from './styles'
import JogoMemoria from '../../Components/JogoMemoria'
import MediaQuery from 'react-responsive'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Terceira() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Content>
      <Text> Acho melhor dar uma boa olhada nas imagens... </Text>
      <MediaQuery maxDeviceWidth={700}>
        <Fotos>
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />

          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
        </Fotos>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1000}>
        <Fotos>
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />


          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
          <Foto url={"/Assets/cabeca1.png"} />
        </Fotos>
      </MediaQuery>
      <Button onClick={() => setOpen(!isOpen)}> Olhei </Button>
      <JogoMemoria
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Content>
  )
}
