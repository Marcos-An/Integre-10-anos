import React, { Component } from 'react'
import BoardDesk from './BoardDesk'
import BoardMb from './BoardMb'
import MediaQuery from 'react-responsive'

export default class Memory extends Component {

  render() {
    const { isOpen, setOpen } = this.props;
    return (
      <>
        <MediaQuery maxDeviceWidth={700}>
          <BoardMb isOpen={isOpen} setOpen={setOpen} />
        </MediaQuery>
        <MediaQuery minDeviceWidth={800}>
          <BoardDesk isOpen={isOpen} setOpen={setOpen} />
        </MediaQuery>
      </>
    )
  }
}
