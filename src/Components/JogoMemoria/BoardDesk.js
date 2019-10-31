import React, { Component } from 'react'
import { Content, Fotos, Foto } from './styles'
import Modal from '../Modal/ModalTopAjust'


export default class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        { value: '/Assets/Meme/cabeca1.png', isVisible: false },
        { value: '/Assets/Meme/cabeca2.jpeg', isVisible: false },
        { value: '/Assets/Meme/cabeca1.png', isVisible: false },
        { value: '/Assets/Meme/cabeca2.jpeg', isVisible: false }
      ],
      selected: false
    }
  }
  SelectedfindIndex() {

  }
  handleVisible(index) {
    const newBoard = [...this.state.board]
    this.setState({ board: newBoard })

    if (this.state.selected === false) {
      newBoard[index].isVisible = true
      this.setState({ board: newBoard })
      this.setState({ selected: newBoard[index] })

    } else if (this.state.selected.value !== newBoard[index].value) {
      const selectedIndex = newBoard.findIndex((item) => item === this.state.selected ? true : false)
      newBoard[index].isVisible = true
      this.setState({ board: newBoard })

      setTimeout(() => {
        newBoard[index].isVisible = false
        newBoard[selectedIndex].isVisible = false
        this.setState({ board: newBoard })
      }, 1500)
    } else if (this.state.selected.value === newBoard[index].value) {
      newBoard[index].isVisible = true
      this.setState({ board: newBoard })
      setTimeout(() => {
        this.setState({ selected: false })
      }, 100)
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
          <Fotos>
            {console.log(this.state.selected)}
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
