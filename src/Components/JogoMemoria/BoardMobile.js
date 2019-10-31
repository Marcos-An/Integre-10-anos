import React, { Component } from 'react'
import { Content, Fotos, Foto } from './styles'
import Modal from '../Modal/ModalTopAjust'


export default class Memory extends Component {
  render(){
    const { isOpen, setOpen} = this.props
    return (
      <Modal
        title="Como está sua memória?"
        isOpen={isOpen}
        onCancel={() => setOpen(!isOpen)}
        footer={null}
        width={'100vw'}
      >
        <Content>
          <Fotos>
            <Foto>
              <img className="front-face" src="/Assets/cabeca1.png" alt="Face da Carta" />
              <img className="back-face" src="/Assets/logo.png" alt="Costa da Carta" />
            </Foto>
            <Foto url={"/Assets/logo.png"} />
            <Foto url={"/Assets/logo.png"} />

            <Foto url={"/Assets/logo.png"} />
            <Foto url={"/Assets/logo.png"} />
            <Foto url={"/Assets/logo.png"} />
          </Fotos>
        </Content>
      </Modal>
    )
  }
}
