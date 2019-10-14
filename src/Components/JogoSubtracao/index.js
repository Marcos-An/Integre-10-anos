import React from 'react'
import Modal from '../Modal'
import { InputNumber } from 'antd'
import { Button } from '../../Components/Buttons/ButtonPrincipal'
import {
  Body,
  Conta,
  ContentConta,
  Mensagem
} from './ModalStyle'

export default function Modals(props) {
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
        {props.result === 10 &&
          <>
            <Mensagem>{`Você é bom em exatas >.<`}</Mensagem>
            <Button>Continuar</Button>
          </>
        }
      </Body>
    </Modal>
  );
}