import React, { useState } from "react";
import store from "./store";
import App from "./containers/App.jsx";
import Modal from "../Modal/ModalPaddingNone"
import { Provider } from "react-redux";

export default function Dialogs(props) {
  const [placar, setPlacar] = useState(0)
  const handlePlacar = () => setPlacar(1)
  console.log(placar);

  return (
    <Provider store={store}>
      <Modal
        isOpen={props.isOpen}
        onCancel={() => props.setOpen(!props.isOpen)}
        footer={null}
        width={'90vw'}
      >
        <div style={{ height: '94vh' }}>
          <App handlePlacar={handlePlacar} />
        </div>

      </Modal>
    </Provider>
  );
}
