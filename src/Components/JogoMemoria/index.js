import React, { Component } from 'react'
import BoardDesk from './BoardDesk'

export default class Memory extends Component {

  render() {
    const { isOpen, setOpen } = this.props;
    return (
      <BoardDesk isOpen={isOpen} setOpen={setOpen} />
    )
  }
}
