import React from 'react'
import { Fotos, Foto, Text, Description, Modal, Close, FotoZoom, DescriptionZoom } from './styles'

const Click = (index) => {
  var Modal = document.getElementsByClassName("Modal")
  Modal[index].style.display = 'flex'
}
const ClickClose = (index) => {
  var Modal = document.getElementsByClassName("Modal")
  Modal[index].style.display = 'none'
}
const ClickNext = (index) => {
  var Modal = document.getElementsByClassName("Modal")
  Modal[index].style.display = 'none'

  if (index + 1 < 10) {
    Modal[index + 1].style.display = 'flex'
  } else if (index + 1 >= 10) {
    Modal[0].style.display = 'flex'
  }

}
export default function Terceira(props) {
  return (
    <>
      <Text>Acho melhor dar uma boa olhada nas imagens...</Text>
      <Fotos>
        {
          props.imagens.map((item, index) => (
            <div>
              <Foto onClick={() => Click(index)} url={`${item.imagem}`} />
              <Description>{`${item.descricao}`}</Description>
              <Modal className="Modal">
                <Close onClick={() => ClickClose(index)} class="close">&times;</Close>
                <FotoZoom onClick={() => ClickNext(index)} url={`${item.imagem}`} />
                <DescriptionZoom>{`${item.descricao}`}</DescriptionZoom>
              </Modal>
            </div>
          ))
        }
      </Fotos>
    </>
  )
}
