import React, { useState } from 'react'
import { Content, VideoContent, Text, Body, Box } from './styles'
import Video from '../../Components/Video'
import CompartilharVideo from '../../Components/CompartilharVideo'
import { ButtonShare } from '../../Components/Buttons/ButtonPrincipal'
import Loguinho from '../../Components/Loguinho'

export default function Quarta() {
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
          compartilhado === false ? (
            <>
              <Text>
                Nossa história é, sem dúvida, marcada por muitos desafios e superações,
                mas acima de tudo, muita dedicação e pioneirismo na área digital.
                </Text>
              <Box>
                <ButtonShare>Compartilhe para desbloquear</ButtonShare>
                <CompartilharVideo
                  setCompartilhado={setCompartilhado}
                />
              </Box>
            </>

          ) : null
        }
      </Content>
    </Body>
  )
}
