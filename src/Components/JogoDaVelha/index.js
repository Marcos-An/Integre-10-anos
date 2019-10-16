import React, { useState } from "react";
import store from "./store";
import App from "./containers/App.jsx";
import Modal from "../Modal/ModalPaddingNone"
import { Provider } from "react-redux";
import { Button } from "../Buttons/ButtonPrincipal"
import { Mensagem } from "../JogoSubtracao/ModalStyles"
import styled from "styled-components"

const MensagemBox = styled.div`
  height: 90vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function Dialogs(props) {
  const [placar, setPlacar] = useState(0)
  const handlePlacar = () => setPlacar(1)

  return (
    <Provider store={store}>
      <Modal
        isOpen={props.isOpen}
        onCancel={() => props.setOpen(!props.isOpen)}
        footer={null}
        width={'90vw'}
      >
        {placar === 0 ? (
          <div style={{ height: '94vh' }}>
            <App handlePlacar={handlePlacar} />
          </div>
        ) : (
            <MensagemBox>
              <Mensagem style={{ marginBottom: 40 }}>
                Você conseguiu terminar mais um desafio, vamos em frente :D
              </Mensagem>
              <Button>Próximo</Button>
            </MensagemBox>
          )}
      </Modal>
    </Provider>
  );
}
