import React, { useState } from 'react'
import { Content, VideoContent, Text, Body } from './styles'
import Video from '../../Components/Video'
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
          <Video
            url="https://www.youtube.com/embed/xMHP6xzSxP8"
            title="Video inicial"
          />
        </VideoContent>
        {
          compartilhar === false ? (
            <>
              <Text>
                Nossa história é, sem dúvida, marcada por muitos desafios e superações,
                mas acima de tudo, muita dedicação e pioneirismo na área digital.
            </Text>
              <Button onClick={() => setOpen(!isOpen)}>Continuar</Button>
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
