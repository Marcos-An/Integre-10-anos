import React from 'react'
import { Dica, TextDica, Text } from './styles'
import { Icon } from 'antd';

export default function Dicas(props) {
  return (
    <Dica>
      <TextDica>
        <Icon
          style={{ marginRight: 5 }}
          type="info-circle"
          theme="twoTone"
          twoToneColor="#faad14"
        />
        Dica:
      </TextDica>
      <Text> {`${props.data[props.index].descricao}`} </Text>
    </Dica>
  )
}
