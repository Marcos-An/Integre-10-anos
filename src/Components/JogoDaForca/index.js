import React, { Component } from 'react'
import { Palavra, Letra, Erradas } from './styles'
import Modal from '../Modal/Modal'
import Forca from './Forca'

export default class JogoDaForca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erros: 0,
      sorteada: '',
      sorteadaLetras: [],
      palavras: ["Integre", "produção", "Arte", "Roteiro"],
      segredo: '',
      segredoLetras: [],
      letrasCertas: ["I", "n", "t"],
      letrasErradas: "",
      letrasErradasArray: []
    }
  }
  componentDidMount() {
    this.handlePalavra()
    this.handeleLetrasErradas()
    this.handleErro()
  }
  handlePalavra() {
    var index = Math.floor((Math.random() * 3) + 1);
    setTimeout(() => {
      this.setState({ segredo: this.state.palavras[index] })
      this.setState({ segredoLetras: this.state.segredo.split("") })

      this.setState({ sorteada: this.state.segredo.replace(/./g, ' ') })
      this.setState({ sorteadaLetras: this.state.sorteada.split("") })
    }, 100);
  }
  handeleLetrasErradas() {
    this.setState({ letrasErradasArray: this.state.letrasErradas.split("") })
  }
  handleErro() {
    setTimeout(() => {
      this.setState({ erros: this.state.letrasErradasArray.length })
    }, 200);
  }

  render() {
    const { isOpen, setOpen } = this.props
    return (
      <Modal
        title="Qual é a palavra?"
        isOpen={isOpen}
        onCancel={() => setOpen(!isOpen)}
        footer={null}
        width={'90vw'}
      >
        <Forca erros={this.state.erros} />
        <Palavra>
          {
            this.state.sorteadaLetras.map((item) => (
              <Letra>
                {`${item}`}
              </Letra>
            ))
          }
          {
            this.state.letrasErradasArray.map((item) => (
              <Erradas>
                {`${item}`}
              </Erradas>
            ))
          }

          document.querySelector('body').addEventListener('keydown', function(e) {
            console.log
          }

        </Palavra>
      </Modal >
    )

  }
}
