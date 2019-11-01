import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import BoardDesk from './BoardDesk'
import BoardMobile from './BoardMobile'

export default class Memory extends Component {

  render() {
    const { isOpen, setOpen } = this.props;
    return (
      <>
        <MediaQuery maxDeviceWidth={700}>
          <BoardMobile isOpen={isOpen} setOpen={setOpen} />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1000}>
          <BoardDesk isOpen={isOpen} setOpen={setOpen} />
        </MediaQuery>
      </>
    )
  }
}
