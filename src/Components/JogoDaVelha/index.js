import React, { useState } from "react";
import store from "./store";
import App from "./containers/App.jsx";
import Modal from "../Modal/ModalPaddingNone"
import MediaQuery from "react-responsive";
import { Provider } from "react-redux";

export default function Dialogs(props) {
  const [placar, setPlacar] = useState(0)
  const handlePlacar = () => setPlacar(1)
  console.log(placar);

  return (
    <Provider store={store}>
      <MediaQuery maxDeviceWidth={700}>
        <Modal
          isOpen={props.isOpen}
          onCancel={() => props.setOpen(!props.isOpen)}
          footer={null}
          width={'94vw'}
        >
          <div style={{ height: '100vh' }}>
            <App handlePlacar={handlePlacar} url={props.url}/>
          </div>
        </Modal>
      </MediaQuery>
      

      <MediaQuery minDeviceWidth={900} maxDeviceWidth={1400}>
        <Modal
          isOpen={props.isOpen}
          onCancel={() => props.setOpen(!props.isOpen)}
          footer={null}
          width={'94vw'}
        >
          <div style={{ height: '94vh' }}>
            <App handlePlacar={handlePlacar} url={props.url} />
          </div>
        </Modal>
      </MediaQuery>


      <MediaQuery minDeviceWidth={1500}>
        <Modal
          isOpen={props.isOpen}
          onCancel={() => props.setOpen(!props.isOpen)}
          footer={null}
          width={'70vw'}
        >
          <div style={{ height: '90vh' }}>
            <App handlePlacar={handlePlacar} url={props.url}/>
          </div>
        </Modal>
      </MediaQuery>
    </Provider>
  );
}
