import React from 'react'
import { Fotos, Foto, Body, Box, Text } from './styles'
import Loguinho from '../../Components/Loguinho'

var indexVelho = ''
const Local = (item, index, props) => {

  if (indexVelho !== '' && indexVelho !== index) {
    document.getElementById(indexVelho).style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.15)"
    document.getElementById(index).style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.30)"
    localStorage.setItem('url', item)
    props.setChoosed(true)
  }
  if (index !== indexVelho) {
    document.getElementById(index).style.boxShadow = " 0px 0px 0px 8px rgba(92,124,183,0.9)"
    indexVelho = index
    props.setChoosed(true)
    localStorage.setItem('url', item)
  }
}

export default function Terceira(props) {
  return (
    <Body>
      <Box>
        <Loguinho />
        <Text>Esses memes são Épicos. Escolha o seu preferido!</Text>
      </Box>
      <Fotos>
        {
          props.imagens.map((item, index) => (
            <Foto key={`${index}`} id={`${index}`} onClick={() => Local(item, index, props)} url={`${item}`} />
          ))
        }
      </Fotos>
    </Body>
  )
}
