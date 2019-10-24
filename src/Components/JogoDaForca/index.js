import React, { Component } from 'react'
import { Palavra, Letra, Erradas, Content, PalavraBox, LetraErrada } from './styles'
import Button from './Buttons'
import { notification } from 'antd';
import Modal from '../Modal/ModalTopAjust0'
import Forca from './Forca'


const index = Math.floor((Math.random() * 3) + 1);
export default class JogoDaForca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erros: 0,
      sorteada: '',
      sorteadaLetras: [],
      data: [
        {
          type: 'warning',
          palavra: 'integre',
          description: 'integre báh',
        },
        {
          type: 'warning',
          palavra: 'producao',
          description: 'producao báh',
        },
        {
          type: 'warning',
          palavra: 'arte',
          description: 'arte báh',
        },
        {
          type: 'warning',
          palavra: 'roteiro',
          description: 'roteiro báh',
        }
      ],
      segredo: '',
      segredoLetras: [],
      letrasErradas: "",
      letrasErradasArray: []
    }
  }

  componentDidMount() {
    this.handlePalavra()
    this.handeleLetrasErradas()
    this.handleErro()
    document.addEventListener('keypress', this.handleEvent.bind(this))
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEvent.bind(this))
  }
  handlePalavra() {
    setTimeout(() => {
      this.setState({ segredo: this.state.data[index].palavra })
      console.log(this.state.data[index].palavra)
      this.setState({ segredoLetras: this.state.segredo.split("") })
      this.separada()
    }, 100);
  }
  separada() {
    this.setState({ sorteada: this.state.segredo.replace(/./g, ' ') })
    this.setState({ sorteadaLetras: this.state.sorteada.split("") })
  }

  handeleLetrasErradas() {
    this.setState({ letrasErradasArray: this.state.letrasErradas.split("") })
  }
  handleErro() {
    setTimeout(() => {
      this.setState({ erros: this.state.letrasErradasArray.length })
    }, 200);
  }
  handleEvent = (e) => {
    let tecla = e.key.toLowerCase()
    if (this.state.sorteada !== this.state.segredo && this.state.erros < 6) {
      if (this.state.segredo.indexOf(tecla) > -1) {
        for (let i = 0; i < this.state.segredo.length; i++) {
          if (this.state.segredo[i] === tecla) {
            this.setState({ sorteada: this.state.sorteada.substr(0, i) + tecla + this.state.sorteada.substr(i + 1) })
            this.setState({ sorteadaLetras: this.state.sorteada.split("") })
          }
        }
      } else {
        if (this.state.letrasErradasArray.indexOf(tecla) === -1 && tecla.match(/[a-z]/)) {
          this.setState({ letrasErradas: this.state.letrasErradas + tecla })
          this.setState({ letrasErradasArray: this.state.letrasErradas.split("") })
          this.setState({ erros: this.state.letrasErradasArray.length })
        }
      }
    }
  }

  render() {
    const { isOpen, setOpen } = this.props

    return (
      <Modal
        title="Qual é a palavra?"
        isOpen={isOpen}
        onCancel={() => setOpen(!isOpen)}
        footer={null}
        width={'97vw'}
      >
        <Content>
          <Forca erros={this.state.erros} />
          <PalavraBox>
            <LetraErrada>
              {
                this.state.letrasErradasArray.map((item) => (
                  <Erradas>
                    {`${item}`}
                  </Erradas>
                ))
              }
            </LetraErrada>
            <Palavra>
              {
                this.state.sorteadaLetras.map((item) => (
                  <Letra>
                    {`${item}`}
                  </Letra>
                ))
              }
            </Palavra>
            <Button />
          </PalavraBox>
        </Content>
      </Modal >
    )

  }
}
