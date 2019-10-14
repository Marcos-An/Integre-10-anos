import React from 'react'
import { Modal, InputNumber } from 'antd'
import { Body, Conta } from './ModalStyle'

export default function Modals(props) {
  return (
    <Modal
      title="Basic Modal"
      visible={props.isOpen}
      onCancel={() => props.setOpen(!props.isOpen)}
      footer={null}
      width={900}
    >
      <Body>
        <Conta>2019 - 2009 =</Conta>
        <InputNumber
          className="input"
          max={100000}
          value={props.result}
          onChange={e => props.setResult(e.target.value)}
        />
      </Body>
      {console.log(props.result)}
    </Modal>
  );
}