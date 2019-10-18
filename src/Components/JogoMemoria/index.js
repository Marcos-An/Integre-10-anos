import React from 'react'
import { Content, Fotos, Foto } from './styles'
import Modal from '../Modal/ModalTopAjust'
import MediaQuery from 'react-responsive'


export default function Memory(props) {
  return (
    <>
      <MediaQuery maxDeviceWidth={700}>
        <Modal
          title="Como está sua memória?"
          isOpen={props.isOpen}
          onCancel={() => props.setOpen(!props.isOpen)}
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
      </MediaQuery>

      <MediaQuery minDeviceWidth={1000}>
        <Modal
          title="Como está sua memória?"
          isOpen={props.isOpen}
          onCancel={() => props.setOpen(!props.isOpen)}
          footer={null}
          width={'95vw'}
        >
          <Content>
            <Fotos>
              <Foto>
                <img className="front-face" src="/Assets/cabeca-tarciso.png" alt="Face da Carta" />
                <img className="back-face" src="/Assets/logo.png" alt="Costa da Carta" />
              </Foto>
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />

              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
              <Foto url={"/Assets/logo.png"} />
            </Fotos>
          </Content>
        </Modal>
      </MediaQuery>
    </>
  )
}
