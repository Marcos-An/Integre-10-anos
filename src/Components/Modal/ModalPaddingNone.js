import React from 'react'
import { Modal } from 'antd'

export default function Modals(props) {
  return (
    <Modal
      bodyStyle={{ padding: "0" }}
      style={{ top: 14 }}
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