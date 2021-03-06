import React, { Component } from 'react'
import { Content, Fotos, Foto, Box, Mensagem } from './styles'
import Modal from '../Modal/ModalTopAjust'
import { Button } from '../Buttons/ButtonPrincipal';


export default class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        { value: '/Assets/Memoria/PrimeiraReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/SegundaReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Terceira.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/11.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Quinta.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/SextaReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Setima.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Oitava.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/04.jpg', isVisible: false, check: '' },

        { value: '/Assets/Memoria/PrimeiraReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/SegundaReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Terceira.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/11.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Quinta.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/SextaReverse.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Setima.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/Oitava.jpg', isVisible: false, check: '' },
        { value: '/Assets/Memoria/04.jpg', isVisible: false, check: '' },
      ],
      selected: false,
      terminou: false,
      lockboard: false
    }
  }
  componentDidMount() {
    this.state.board.forEach((e) => {
      e.isVisible = true
    })
    setTimeout(() => {
      this.state.board.forEach((e) => {
        e.isVisible = false
      })
    }, 100)
  }

  handleVisible(index) {
    var newBoard = [...this.state.board]
    this.setState({ board: newBoard })


    if (newBoard[index].check !== true && this.state.lockboard !== true) {
      if (this.state.selected === false) {
        newBoard[index].isVisible = true
        setTimeout(() => {
          newBoard[index].check = true
          this.setState({ board: newBoard })
          this.setState({ selected: newBoard[index] })
        }, 100)

      } else if (this.state.selected.value !== newBoard[index].value) {
        this.setState({ lockboard: true })
        const selectedIndex = newBoard.findIndex((item) => item === this.state.selected ? true : false)
        newBoard[index].isVisible = true
        this.setState({ board: newBoard })

        setTimeout(() => {
          newBoard[index].isVisible = false
          newBoard[selectedIndex].isVisible = false
          newBoard[selectedIndex].check = ''
          this.setState({ lockboard: false })
          this.setState({ board: newBoard })
          this.setState({ selected: false })
          newBoard = ''
        }, 1000)

      } else if (this.state.selected.value === newBoard[index].value) {
        this.setState({ lockboard: true })
        newBoard[index].isVisible = true
        newBoard[index].check = true
        this.setState({ board: newBoard })
        this.setState({ terminou: newBoard.every((e) => e.check !== '') })

        setTimeout(() => {
          this.setState({ lockboard: false })
          this.setState({ selected: false })
          newBoard = ''
        }, 100)
      }
    }

  }

  render() {
    const { isOpen, setOpen } = this.props
    return (
      <Modal
        title="Como está sua memória?"
        isOpen={isOpen}
        onCancel={() => setOpen(!isOpen)}
        footer={null}
        width={'95vw'}
      >
        <Content>
          {this.state.terminou ? (
            <Box>
              <Mensagem>
                Sua memória está ótima!
              </Mensagem>
              <a href="/Quinta" style={{ color: 'black' }}>
                <Button style={{ marginTop: -10, marginBottom: 30 }}>
                  Parabéns! Mas ainda não acabou…
                  </Button>
              </a>
            </Box>
          ) : (
              <Fotos>
                {this.state.board.map((item, index) => (
                  <Foto id="all" key={index} onClick={() => this.handleVisible(index)}>
                    {
                      item.isVisible ? (
                        <img className="front-face" src={`${item.value}`} alt="Face da Carta" />
                      ) : (
                          <img className="back-face" src="/Assets/logo.png" alt="Costa da Carta" />
                        )
                    }
                  </Foto>
                ))}
              </Fotos>
            )
          }
        </Content>
      </Modal >
    )
  }
}
