import React from 'react'
import {
  Boddy,
  Title,
  SubTitle,
  Left,
  Right,
  Meme
} from './styles'

const url = localStorage.getItem('url')
export default function Setima() {
  return (
    <Boddy>
      <Left>
        <Title>Obrigado por jogar!</Title>
        <SubTitle>Conheça a nossa história enquanto se diverte!</SubTitle>
      </Left>
      <Right>
        <Meme url={`${url}`} />
      </Right>
    </Boddy>
  );
}