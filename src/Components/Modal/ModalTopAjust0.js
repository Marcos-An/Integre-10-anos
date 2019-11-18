import React from 'react'
import { Modal } from 'antd'

export default function Modals(props) {
  return (
    <Modal
      style={{ top: 20 }}
      title={props.title}
      visible={props.isOpen}
      onCancel={props.onCancel}
      bodyStyle={{ padding: 10 }}
      footer={null}
      width={props.width}
    >
      {props.children}
    </Modal >
  );
}