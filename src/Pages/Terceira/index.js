import React, { useState } from 'react'
import { Content, VideoContent, Text, Body } from './styles'
import Video from '../../Components/Videos/QuartoVideo'
import CompartilharVideo from '../../Components/CompartilharVideo'
import VideoComparilhado from '../../Components/CompartilharVideo/Compartilhada'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import Forca from '../../Components/JogoDaForca'
import Loguinho from '../../Components/Loguinho'

export default function Quarta() {
  const [isOpen, setOpen] = useState(false)
  const [compartilhar] = useState(false)
  const [compartilhado, setCompartilhado] = useState(false)

  return (
    <Body url="/Assets/bg.png">
      <Content>
        <Loguinho />
        <VideoContent>
          <Video />
        </VideoContent>
        {
          compartilhar === false ? (
            <>
              <Text>
                Quando tudo era só mato… Nós chegamos com a foice! Hehehehe (brincadeira, mas quase isso)
              </Text>
              <Button onClick={() => setOpen(!isOpen)}>Jogar</Button>
            </>

          ) : compartilhar === true && compartilhado === false ? (
            <CompartilharVideo
              setCompartilhado={setCompartilhado}
            />

          ) : null
        }
        {
          compartilhado === true ? (
            <VideoComparilhado />
          ) : null
        }
        <Forca isOpen={isOpen} setOpen={setOpen} />
      </Content>
    </Body>
  )
}
