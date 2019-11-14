import React, { useState, useEffect } from 'react'
import { Content, VideoContent, Box, BoxNext, Info } from './styles'
import Video from '../../Components/Videos/QuartoVideo'
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
    <Content url="/Assets/bg.png">
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
  )
}
