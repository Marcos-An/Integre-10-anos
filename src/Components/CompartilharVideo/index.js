import React from 'react'
import {
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';
import { Content, Text, Social, RedeSocial, Facebook, Insta } from './styles'

export default function CompartilharVideo(props) {
  const shareUrl = 'https://www.youtube.com/embed/xMHP6xzSxP8';
  return (
    <Content>
      <Text> Para continuar compartilhe o vídeo: </Text>
      <Social>
        <FacebookShareButton
          onShareWindowClose={() => props.setCompartilhado(true)}
          url={shareUrl}
          style={{ marginRight: 7 }}
        >
          <RedeSocial className="facebook">
            <Facebook className="Facebook" />
          </RedeSocial>
        </FacebookShareButton>
        <WhatsappShareButton
          onShareWindowClose={() => props.setCompartilhado(true)}
          url={shareUrl}
          style={{ marginRight: 7 }}
        >
          <RedeSocial className="insta">
            <Insta className="Insta" />
          </RedeSocial>
        </WhatsappShareButton>
      </Social>
    </Content>
  )
}
