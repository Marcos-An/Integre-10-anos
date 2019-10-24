import React, { Component } from 'react'
import { Buttons, Button, ContentButtons } from './styles'

export default class ButtonsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letrasAJ: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      letrasKS: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'],
      letrasTZ: ['t', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  }
  render() {
    const { handle } = this.props
    return (
      <ContentButtons >
        <Buttons>
          {
            this.state.letrasAJ.map((item, index) => (
              <Button key={index} onClick={() => handle(`${item}`)}> {`${item.toUpperCase()}`} </Button>
            ))
          }
        </Buttons>
        <Buttons>
          {
            this.state.letrasKS.map((item, index) => (
              <Button key={index} onClick={() => handle(`${item}`)}> {`${item.toUpperCase()}`} </Button>
            ))
          }
        </Buttons>
        <Buttons>
          {
            this.state.letrasTZ.map((item, index) => (
              <Button key={index} onClick={() => handle(`${item}`)}> {`${item.toUpperCase()}`} </Button>
            ))
          }
        </Buttons>
      </ContentButtons >
    )
  }
}