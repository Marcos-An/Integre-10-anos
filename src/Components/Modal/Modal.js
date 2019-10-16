import React from 'react'
import { Modal } from 'antd'

export default function Modals(props) {
  return (
    <Modal
      title={props.title}
      visible={props.isOpen}
      onCancel={props.onCancel}
      footer={null}
      width={props.width}
    >
      {props.children}
    </Modal >
  );
}