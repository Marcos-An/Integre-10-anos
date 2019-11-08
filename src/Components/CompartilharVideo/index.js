import React from 'react'
import {
  FacebookShareButton,
  TelegramShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
import { Social } from './styles'
import MediaQuery from 'react-responsive'

export default function CompartilharVideo(props) {
  const shareUrl = 'https://www.youtube.com/embed/xMHP6xzSxP8';
  return (
    <>
      <MediaQuery maxDeviceWidth={1400}>
        <Social>
          <FacebookShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TelegramShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
          <WhatsappShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </Social>
      </MediaQuery>


      <MediaQuery minDeviceWidth={1500}>
        <Social>
          <FacebookShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <TelegramShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <TelegramIcon size={50} round={true} />
          </TelegramShareButton>
          <WhatsappShareButton
            onShareWindowClose={() => props.setCompartilhado(true)}
            url={shareUrl}
            style={{ marginRight: "3vh" }}
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
        </Social>
      </MediaQuery>
    </>
  )
}
