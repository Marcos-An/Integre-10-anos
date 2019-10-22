import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Forca from './forca.svg'
import { SvgLoader } from "react-svgmt";

export default function JogoDaForca(props) {
  const [erros, setErros] = useState(0)

  return (
    <Modal
      title="Qual é a palavra?"
      isOpen={props.isOpen}
      onCancel={() => props.setOpen(!props.isOpen)}
      footer={null}
      width={'90vw'}
    >
      <SvgLoader width="500" height="500" path={Forca} />
      <button onClick={() => setErros(erros + 1)}> + </button>
    </Modal>
  )
}
