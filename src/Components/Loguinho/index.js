import React from 'react'
import { Imagem } from './styles'
import Loguinho from './10anos.svg'
import Logo from './10anos copy.svg'
import MediaQuery from 'react-responsive'


export default function loguinho(props) {
  return (
    <>
      <MediaQuery maxDeviceWidth={1500}>
        <Imagem src={`${Loguinho}`} alt="" top={props.top} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1501}>
        <Imagem src={`${Logo}`} alt="" top={props.top} />
      </MediaQuery>
    </>
  )
}
