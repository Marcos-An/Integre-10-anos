import React from 'react'
import { Content, VideoContent, Body } from './styles'
import Video from '../../Components/Videos/TerceiroVideo'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import Loguinho from '../../Components/Loguinho'

export default function Quarta() {
  return (
    <Body url="/Assets/bg.png">
      <Content>
        <Loguinho />
        <VideoContent>
          <Video />
        </VideoContent>
        <a href="/Nona" style={{ color: 'black' }}>
          <Button >Continuar</Button>
        </a>
      </Content>
    </Body>
  )
}
