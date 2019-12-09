import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/game";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import {
  SUN_FLOWER,
  MIDNIGHT_BLUE,
  ORANGE,
  WISTERIA,
  NEPHRITIS,
  PLAYER
} from "../colors";
import Scoreboard from "../components/Scoreboard.jsx";
import Board from "../components/Board.jsx";
import Alert from "../components/Alert.jsx";
import MediaQuery from "react-responsive";
import { notification, Modal } from 'antd';

const { confirm } = Modal;

const StyledScoreboard = styled.div`
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledScoreboardX = styled(StyledScoreboard)`
  left: 0;
  margin-top: -40px; 
`;

const StyledScoreboardO = styled(StyledScoreboard)`
  right: 0;
  margin-top: -40px; 
`;

const StyledBoard = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 46%;
  left: 46%;
  transform: translate(-50%, -50%);

  @media (max-width: 700px){
    flex-direction: column;
    left: 50%;
    margin-bottom: 50%;
  }
  @media (min-width: 1500px){
    width: 65%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: 20%;
  @media (max-width: 700px) {
    left: 0%;
    margin: 24% 0% 7% 0%;
  }
  @media (min-width: 1500px){
    left: 15%;
  }
`;

export const Text = styled.h2`
  color: #6B6B6B;
  text-align: center;
  position: relative;
  font-size: 18px;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 15px;
    text-align: center;
  }
  @media (min-width: 1500px){
    font-size: 20px;
    width: 100%;
    word-break: break-word;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-size: 18px;
  word-break: break-word;
  left: 20%;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500px){
    font-size: 20px;
    left: 15%;
    width: 100%;
    word-break: break-word;
  }
`;

export const Content = styled.div`
  display: flex;

  @media (max-width: 600px) {
  }
  @media (min-width: 1500px){
  }
`;


const openNotificationCasaCheia = type => {
  notification[type]({
    message: 'Esta casa já está ocupada',
    description:
      'A casa que você está tentando colocar a sua peça já está ocupada. Coloque em outra casa!',
    duration: 4,
  });
};

const openNotificationNecesario = () => {
  notification.open({
    message: 'Isso não é necessário.',
    description:
      'O jogo ainda não começou, não é necessário te dar mais uma chance.',
    duration: 4,
  });
};

class App extends Component {
  everyIsEmpty = () => {
    return this.props.game.board.every(value => value === null);
  };
  play = index => {
    if (this.props.game.isFinished) return;
    if (this.props.game.board[index])
      return openNotificationCasaCheia('warning');

    // For the human.
    this.props.actions.play({
      index,
      player: this.props.game.players.human.name
    });

    // For the computer.
    setTimeout(() => {
      this.props.actions.play({
        player: this.props.game.players.human.name === "x" ? "o" : "x"
      });
    }, 250);
  };

  start = () => {
    this.props.actions.restart();
  };

  restart = () => {
    if (this.everyIsEmpty()) return openNotificationNecesario();
    this.showConfirm();
  };
  showConfirm = () => {
    let ok = () => this.start()
    confirm({
      title: 'Você tem certeza?',
      content: 'Isso vai limpar o tabuleiro e recomeçar o jogo',
      onOk() { ok() },
      onCancel() { }
    });
  }
  render() {
    const { human, computer } = this.props.game.players;

    return (
      <Fragment>
        <MediaQuery maxDeviceWidth={700}>
          <StyledScoreboardX>
            <Scoreboard
              width={60}
              playerName="x"
              playerBackground={WISTERIA}
              playerColor={human.name === "x" ? SUN_FLOWER : "white"}
              score={human.name === "x" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardX>
          <StyledScoreboardO>
            <Scoreboard
              width={60}
              playerName="o"
              playerBackground={WISTERIA}
              playerColor={human.name === "o" ? SUN_FLOWER : "white"}
              score={human.name === "o" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardO>
          {human.victories >= 1 && this.props.handlePlacar()}

          <StyledBoard>
            <TextBox>
              <Title>Você conhece o Jogo da Velha?</Title>
              <Text>Clique em um dos quadrados ao lado e vença a máquina para continuar!</Text>
            </TextBox>
            <Board
              board={this.props.game.board}
              onClick={this.play}
              cellWidth={85}
              cellColor="white"
              borderWidth={0}
              borderColor={MIDNIGHT_BLUE}
              colorPlayerX={PLAYER}
              colorPlayerO={NEPHRITIS}
            />
          </StyledBoard>
          <Alert
            url={this.props.url}
            isOpen={this.props.game.isFinished}
            onClickButtonOpened={this.start}
            onClickButtonClosed={this.restart}
            containerHeight={10}
            containerColor={MIDNIGHT_BLUE}
            buttonIconOpened="Voltar"
            buttonIconClosed="+1x"
            buttonWidth={65}
            buttonColor={ORANGE}
            winner={this.props.game.winner}
          />
        </MediaQuery>


        <MediaQuery minDeviceWidth={800} maxDeviceWidth={1400} >
          <StyledScoreboardX >
            <Scoreboard
              width={60}
              playerName="x"
              playerBackground={WISTERIA}
              playerColor={human.name === "x" ? SUN_FLOWER : "white"}
              score={human.name === "x" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardX>
          <StyledScoreboardO >
            <Scoreboard
              width={60}
              playerName="o"
              playerBackground={WISTERIA}
              playerColor={human.name === "o" ? SUN_FLOWER : "white"}
              score={human.name === "o" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardO>
          {human.victories >= 1 && this.props.handlePlacar()}
          <Content>
            <StyledBoard>
              <Board
                board={this.props.game.board}
                onClick={this.play}
                cellWidth={120}
                cellColor="white"
                borderWidth={0}
                borderColor={''}
                colorPlayerX={PLAYER}
                colorPlayerO={NEPHRITIS}
              />
              <TextBox>
                <Title>Você conhece o Jogo da Velha?</Title>
                <Text>Clique em um dos quadrados ao lado e vença a máquina para continuar!</Text>
              </TextBox>
            </StyledBoard>
          </Content>
          <Alert
            url={this.props.url}
            isOpen={this.props.game.isFinished}
            onClickButtonOpened={this.start}
            onClickButtonClosed={this.restart}
            containerHeight={10}
            containerColor={MIDNIGHT_BLUE}
            buttonIconOpened="Voltar"
            buttonIconClosed="+1x"
            buttonWidth={65}
            buttonColor={ORANGE}
            winner={this.props.game.winner}
          />
        </MediaQuery>



        <MediaQuery minDeviceWidth={1500}>
          <StyledScoreboardX >
            <Scoreboard
              width={60}
              playerName="x"
              playerBackground={WISTERIA}
              playerColor={human.name === "x" ? SUN_FLOWER : "white"}
              score={human.name === "x" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardX>
          <StyledScoreboardO >
            <Scoreboard
              width={60}
              playerName="o"
              playerBackground={WISTERIA}
              playerColor={human.name === "o" ? SUN_FLOWER : "white"}
              score={human.name === "o" ? human.victories : computer.victories}
              scoreBackground={SUN_FLOWER}
            />
          </StyledScoreboardO>
          {human.victories >= 1 && this.props.handlePlacar()}
          <Content>
            <StyledBoard>
              <Board
                board={this.props.game.board}
                onClick={this.play}
                cellWidth={170}
                cellColor="white"
                borderWidth={0}
                borderColor={''}
                colorPlayerX={PLAYER}
                colorPlayerO={NEPHRITIS}
              />
              <TextBox>
                <Title>Você conhece o Jogo da Velha?</Title>
                <Text>Clique em um dos quadrados ao lado e vença a máquina para continuar!</Text>
              </TextBox>
            </StyledBoard>
          </Content>
          <Alert
            url={this.props.url}
            isOpen={this.props.game.isFinished}
            onClickButtonOpened={this.start}
            onClickButtonClosed={this.restart}
            containerHeight={10}
            containerColor={MIDNIGHT_BLUE}
            buttonIconOpened="Voltar"
            buttonIconClosed="+1x"
            buttonWidth={65}
            buttonColor={ORANGE}
            winner={this.props.game.winner}
          />
        </MediaQuery>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
