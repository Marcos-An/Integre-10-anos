import React from 'react'
import { Content, VideoContent, Text, Body } from './styles'
import Video from '../../Components/Video'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import Loguinho from '../../Components/Loguinho'

export default function Quarta() {
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
        <Text>
          Nossa história é, sem dúvida, marcada por muitos desafios e superações,
          mas acima de tudo, muita dedicação e pioneirismo na área digital.
        </Text>
        <a href="/Nona" style={{ color: 'black' }}>
          <Button >Continuar</Button>
        </a>
      </Content>
    </Body>
  )
}
