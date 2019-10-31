import React, { Component } from 'react'
import { Content, Fotos, Foto } from './styles'
import Modal from '../Modal/ModalTopAjust'


export default class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        { value: '/Assets/Meme/cabeca1.png', isVisible: false, check: '' },
        { value: '/Assets/Meme/cabeca2.jpeg', isVisible: false, check: '' },
        { value: '/Assets/Meme/cabeca1.png', isVisible: false, check: '' },
        { value: '/Assets/Meme/cabeca2.jpeg', isVisible: false, check: '' }
      ],
      selected: false
    }
  }
  SelectedfindIndex() {

  }
  handleVisible(index) {
    var newBoard = [...this.state.board]
    this.setState({ board: newBoard })
    console.log();

    if (newBoard[index].check !== true) {
      if (this.state.selected === false) {
        newBoard[index].isVisible = true
        setTimeout(() => {
          newBoard[index].check = true
          this.setState({ board: newBoard })
          this.setState({ selected: newBoard[index] })
        }, 100)

      } else if (this.state.selected.value !== newBoard[index].value) {
        const selectedIndex = newBoard.findIndex((item) => item === this.state.selected ? true : false)
        newBoard[index].isVisible = true
        this.setState({ board: newBoard })

        setTimeout(() => {
          newBoard[index].isVisible = false
          newBoard[selectedIndex].isVisible = false
          newBoard[selectedIndex].check = ''
          this.setState({ board: newBoard })
          this.setState({ selected: false })
          newBoard = ''
        }, 1500)
      } else if (this.state.selected.value === newBoard[index].value) {
        newBoard[index].isVisible = true
        newBoard[index].check = true
        this.setState({ board: newBoard })


        setTimeout(() => {
          this.setState({ selected: false })
          newBoard = ''
        }, 100)
      }
    } else console.log("Já escolheu essa meu consagrado");

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
          <Fotos>
            {this.state.board.map((item, index) => (
              <Foto key={index} onClick={() => this.handleVisible(index)}>
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
        </Content>
      </Modal>
    )
  }
}
