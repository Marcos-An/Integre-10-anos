import React, { useState, useEffect } from 'react'
import { Content, VideoContent, Text, Body, Box, BoxNext, Info } from './styles'
import Video from '../../Components/Video'
import CompartilharVideo from '../../Components/CompartilharVideo'
import { ButtonShare2, ButtonShare, Button } from '../../Components/Buttons/ButtonPrincipal'
import Loguinho from '../../Components/Loguinho'


export default function Quarta() {
  const [time, setTime] = useState(0)
  const [compartilhado, setCompartilhado] = useState(false)

  useEffect(() => {
    if (time !== 5) {
      setTimeout(() => {
        setTime(time + 1)
        console.log(time);
      }, 500)
    }
  });

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
            <Info>
              <Text>
                Nossa história é, sem dúvida, marcada por muitos desafios e superações,
                mas acima de tudo, muita dedicação e pioneirismo na área digital.
              </Text>
              <Box>
                <ButtonShare2 style={{ position: 'relative' }}>Compartilhe</ButtonShare2>
                <ButtonShare style={{ position: 'relative' }}>para desbloquear</ButtonShare>
                <CompartilharVideo
                  style={{ position: 'relative' }}
                  setCompartilhado={setCompartilhado}
                />
              </Box>
              {
                time === 5 && <a href="/Setima">Sem tempo irmão</a>
              }
            </Info>
          ) : (
              <>
                <BoxNext>
                  <Button>Compartilhe para desbloquear</Button>
                </BoxNext>
              </>
            )
        }
      </Content>
    </Body>
  )
}
