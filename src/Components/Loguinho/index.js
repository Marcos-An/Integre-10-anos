import React from 'react'
import { Imagem } from './styles'
import Loguinho from './logo.png'
import MediaQuery from 'react-responsive'


export default function loguinho(props) {
  return (
    <>
      <MediaQuery maxDeviceWidth={1500}>
        <Imagem src={`${Loguinho}`} alt="" top={props.top} left={props.left} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1501}>
        <Imagem src={`${Loguinho}`} alt="" top={props.top} left={props.left} />
      </MediaQuery>
    </>
  )
}
