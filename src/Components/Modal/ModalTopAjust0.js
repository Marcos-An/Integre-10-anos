import React from 'react'
import { Modal } from 'antd'

export default function Modals(props) {
  return (
    <Modal
      style={{ top: 20 }}
      visible={props.isOpen}
      onCancel={props.onCancel}
      bodyStyle={{ padding: '30px 10px' }}
      footer={null}
      width={props.width}
    >
      {props.children}
    </Modal >
  );
}