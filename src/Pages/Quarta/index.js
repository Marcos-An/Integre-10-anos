import React, { useState } from 'react'
import { Content, VideoContent, Text } from './styles'
import Video from '../../Components/Video'
import CompartilharVideo from '../../Components/CompartilharVideo'
import VideoComparilhado from '../../Components/CompartilharVideo/Compartilhada'
import { Button } from '../../Components/Buttons/ButtonPrincipal'

export default function Quarta() {
  const [compartilhar, setCompartilhar] = useState(false)
  const [compartilhado, setCompartilhado] = useState(false)

  return (
    <Content>
      {console.log(compartilhado)}
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
            <Button onClick={() => setCompartilhar(!compartilhar)}>Continuar</Button>
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

    </Content>
  )
}
