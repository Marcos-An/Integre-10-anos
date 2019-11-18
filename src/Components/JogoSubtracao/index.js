import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import { InputNumber } from 'antd'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import {
  Body,
  Conta,
  ContentConta,
  Mensagem
} from './ModalStyles'

export default function Modals(props) {
  const [Resposta, setResposta] = useState('')

  useEffect(() => {
    document.addEventListener('keypress', checkEvent.bind(this))
  });

  const checkEvent = (e) => {
    if (e.keyCode === 13) {
      handleChange();
    }
  }
  const handleChange = () => {
    setResposta(props.result);
  }

  return (
    <Modal
      title="Acerte a conta e vamos continuar!"
      isOpen={props.isOpen}
      onCancel={() => props.setOpen(!props.isOpen)}
      footer={null}
      width={900}
    >
      <Body>
        <ContentConta>
          <Conta>2019 - 2009 =</Conta>
          <InputNumber
            className="input"
            min={0}
            max={100000}
            value={props.result}
            onChange={value => props.setResult(value)}
          />
        </ContentConta>
        {Resposta === '' ? (
          <Button onClick={handleChange}> Verificar resposta </Button>
        ) : Resposta === 10 ? (
          <>
            <Mensagem>
              <span role="img" aria-label="smile" style={{ fontSize: 25, marginRight: 10 }}>&#128513;</span>
              Você é bom em exatas!
              <span role="img" aria-label="smile" style={{ fontSize: 25, marginLeft: 10 }}>&#128513;</span>
            </Mensagem>
            <a href="/Segunda" style={{ color: 'black' }}>
              <Button >Continuar</Button>
            </a>
          </>
        ) : Resposta !== 10 && Resposta !== '' ? (
          <>
            <Mensagem>{`Não foi dessa vez, mas tente de novo!`}</Mensagem>
            <Button onClick={handleChange}>Verificar a resposta</Button>
          </>
        ) : null
        }
      </Body>
    </Modal>
  );
}