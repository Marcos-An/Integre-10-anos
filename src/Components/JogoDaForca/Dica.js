import React from 'react'
import { Dica, TextDica } from './styles'

export default function Dicas(props) {
  return (
    <Dica>
      <TextDica>Dica: {`${props.data[props.index].descricao}`}</TextDica>
    </Dica>
  )
}
