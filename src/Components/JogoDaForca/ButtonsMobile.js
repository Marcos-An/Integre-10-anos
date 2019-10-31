import React, { Component } from 'react'
import { Buttons, Button, ContentButtons } from './styles'

export default class ButtonsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letras: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '_'
      ]
    }
  }
  render() {
    const { handle } = this.props
    return (
      <ContentButtons >
        <Buttons>
          {
            this.state.letras.map((item, index) => (
              <Button key={index} onClick={() => handle(`${item}`)}> {`${item.toUpperCase()}`} </Button>
            ))
          }
        </Buttons>
      </ContentButtons >
    )
  }
}