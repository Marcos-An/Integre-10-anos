import React, { Component } from 'react'
import {
  Palavra,
  Letra,
  Erradas,
  Content,
  PalavraBox,
  LetraErrada,
  Acertou,
  Top
} from './styles'
import Buttons from './Buttons'
import ButtonsMobile from './ButtonsMobile'
import MedaiQuery from 'react-responsive'
import { Button } from '../Buttons/ButtonPrincipal'
import Dica from './Dica'
import Modals from '../Modal/ModalTopAjust0'
import Forca from './Forca'
import { Modal } from 'antd';
const { confirm } = Modal;

export default class JogoDaForca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erros: 0,
      index: 0,
      sorteada: '',
      sorteadaLetras: [],
      data: [
        {
          type: 'warning',
          palavra: 'integre',
          descricao: 'Algo que bla bla bla tututu',
        },
        {
          type: 'warning',
          palavra: 'producao',
          descricao: 'Algo que bla bla bla tututu',
        },
        {
          type: 'warning',
          palavra: 'arte',
          descricao: 'Algo que bla bla bla tututu',
        },
        {
          type: 'warning',
          palavra: 'roteiro',
          descricao: 'Algo que bla bla bla tututu',
        }
      ],
      segredo: '',
      segredoLetras: [],
      letrasErradas: "",
      letrasErradasArray: []
    }
  }

  componentDidMount() {
    this.index()
    setTimeout(() => {
      this.handlePalavra()
      this.handeleLetrasErradas()
      this.handleErro()
    }, 100);
    document.addEventListener('keypress', this.handleEvent.bind(this))
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEvent.bind(this))
  }
  componentDidMountAgain() {
    this.index()
    setTimeout(() => {
      this.handlePalavra()
      this.handeleLetrasErradas()
      this.handleErro()
    }, 100);
  }
  index() {
    this.setState({ index: Math.floor((Math.random() * 3) + 1) })
  }
  handlePalavra() {
    setTimeout(() => {
      this.setState({ segredo: this.state.data[this.state.index].palavra })
      console.log(this.state.data[this.state.index].palavra)
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
  showConfirm() {
    confirm({
      title: 'O Marcos morreu',
      content: 'Gostaria de tentar novamente?',
      okText: 'Sim',
      cancelText: 'Cancelar',
      onOk: () => {
        this.setState({ erros: 0 })
        this.setState({ letrasErradas: '' })
        this.setState({ letrasErradasArray: [] })
        this.setState({ segredo: '' })
        this.componentDidMountAgain()
      },
      onCancel() { },
    });
  }
  handleEvent = (e) => {
    let tecla
    let vem = true
    if (e.key !== undefined) {
      tecla = e.key.toLowerCase()
      vem = false
    } else tecla = e
    setTimeout(() => {
      if (this.state.sorteada !== this.state.segredo && this.state.erros < 6) {
        if (this.state.segredo.indexOf(tecla) > -1) {
          for (let i = 0; i < this.state.segredo.length; i++) {
            if (this.state.segredo[i] === tecla) {
              this.setState({ sorteada: this.state.sorteada.substr(0, i) + tecla + this.state.sorteada.substr(i + 1) })
              this.setState({ sorteadaLetras: this.state.sorteada.split("") })
            }
          }
        } else {
          if (vem === false) {
            if (this.state.letrasErradasArray.indexOf(tecla) === -1) {
              this.setState({ letrasErradas: this.state.letrasErradas + tecla })
              this.setState({ letrasErradasArray: this.state.letrasErradas.split("") })
              this.setState({ erros: this.state.letrasErradasArray.length })
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
    }, 100)
  }

  render() {
    const { isOpen, setOpen } = this.props

    return (
      <>
        <MedaiQuery minWidth={800} maxDeviceWidth={1499}>
          <Modals
            title="Qual é a palavra?"
            isOpen={isOpen}
            onCancel={() => setOpen(!isOpen)}
            footer={null}
            width={'80vw'}
          >

            <Content>
              <div>
                <Forca height={500} erros={this.state.erros} />
              </div>
              <PalavraBox>
                <Dica data={this.state.data} index={this.state.index} />
                <Palavra>
                  {
                    this.state.sorteadaLetras.map((item, index) => (
                      <Letra key={index}>
                        {`${item}`}
                      </Letra>
                    ))
                  }
                </Palavra>
                {
                  this.state.erros === 6 ? (
                    this.showConfirm()
                  ) : null
                }
                {
                  this.state.segredo === this.state.sorteada ? (
                    <Acertou>
                      <img src="/Assets/correct.png" alt="" />
                      <a href="/Quarta" style={{ color: 'black', marginTop: '4vh' }}>
                        <Button> Veja o próximo conteúdo</Button>
                      </a>
                    </Acertou>

                  ) : (
                      <>
                        <LetraErrada>
                          {
                            this.state.letrasErradasArray.map((item, index) => (
                              <Erradas key={index}>
                                {`${item}`}
                              </Erradas>
                            ))
                          }
                        </LetraErrada>
                        <Buttons handle={this.handleEvent} />
                      </>
                    )
                }
              </PalavraBox>
            </Content >
          </Modals>
        </MedaiQuery>

        <MedaiQuery minWidth={1500}>
          <Modals
            title="Qual é a palavra?"
            isOpen={isOpen}
            onCancel={() => setOpen(!isOpen)}
            footer={null}
            width={'65vw'}
          >
            <Content>
              <div>
                <Forca height={700} erros={this.state.erros} />
              </div>
              <PalavraBox>
                <Dica data={this.state.data} index={this.state.index} />
                <Palavra>
                  {
                    this.state.sorteadaLetras.map((item, index) => (
                      <Letra key={index}>
                        {`${item}`}
                      </Letra>
                    ))
                  }
                </Palavra>
                {
                  this.state.erros === 6 ? (
                    this.showConfirm()
                  ) : null
                }
                {
                  this.state.segredo === this.state.sorteada ? (
                    <Acertou>
                      <img src="/Assets/correct.png" alt="" />
                      <a href="/Quarta" style={{ color: 'black', marginTop: '4vh' }}>
                        <Button> Veja o próximo conteúdo</Button>
                      </a>
                    </Acertou>

                  ) : (
                      <>
                        <LetraErrada>
                          {
                            this.state.letrasErradasArray.map((item, index) => (
                              <Erradas key={index}>
                                {`${item}`}
                              </Erradas>
                            ))
                          }
                        </LetraErrada>
                        <Buttons handle={this.handleEvent} />
                      </>
                    )
                }
              </PalavraBox>
            </Content >
          </Modals>
        </MedaiQuery>

        <MedaiQuery maxWidth={700}>
          <Modals
            title="Qual é a palavra?"
            isOpen={isOpen}
            onCancel={() => setOpen(!isOpen)}
            footer={null}
            width={'100vw'}
          >

            <Content>
              <Top>
                <Forca height={230} erros={this.state.erros} />
                <LetraErrada>
                  {
                    this.state.letrasErradasArray.map((item, index) => (
                      <Erradas key={index}>
                        {`${item}`}
                      </Erradas>
                    ))
                  }
                </LetraErrada>
              </Top>
              <PalavraBox>
                {this.state.segredo !== this.state.sorteada ? (
                  <Dica data={this.state.data} index={this.state.index} />
                ) : null}
                <Palavra>
                  {
                    this.state.sorteadaLetras.map((item, index) => (
                      <Letra key={index}>
                        {`${item}`}
                      </Letra>
                    ))
                  }
                </Palavra>
                {
                  this.state.erros === 8 ? (
                    this.showConfirm()
                  ) : null
                }
                {
                  this.state.segredo === this.state.sorteada ? (
                    <Acertou>
                      <img src="/Assets/correct.png" alt="" />
                      <a href="/Quarta" style={{ color: 'black', marginTop: '4vh' }}>
                        <Button style={{ padding: '10px 50px' }}> Veja o próximo conteúdo</Button>
                      </a>
                    </Acertou>

                  ) : (
                      <ButtonsMobile handle={this.handleEvent} />
                    )
                }
              </PalavraBox>
            </Content >
          </Modals>
        </MedaiQuery>
      </>
    )
  }
}
