import React, { Fragment } from "react";
import styled from "styled-components";
import lightness from "lightness";
import Player from "./Player.jsx";
import { ButtonOrange } from "../../Buttons/ButtonPrincipal"

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  transition: 0.25s linear;
  height: ${props => (props.isOpen ? 95 - props.height : props.height)}%;
  bottom: 0;
  background-color: ${props => props.color};
`;

const StyledButton = styled.button`
  position: absolute; 
  width: 100px;
  height:  50px;
  border: none;
  outline: none;
  font-family: 'Muli', sans-serif;
  font-size: 23px;
  font-weight: 700;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: .15s linear;
  cursor: pointer;
  color: white;
  background-color: ${props => props.color};

  @media (max-width: 700px){
    width: 155px;
  }
  &:hove{
    transfr {
    transform: translate(-50%, -50%) scale(1.15);
    background-color: ${props => lightness(props.color, -5)};
  }
  &:active {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: ${props => props.color}
  }
  .material-icons {
    font-size: ${props => props.width / 2}px;
  }
  }
`;

const StyledMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${props => (props.isOpen ? "block" : "none")};
  animation: show-message 0.5s forwards;

  @keyframes show-message {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
`;

const StyledMessageText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: white;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn{
    margin-top: 30px;
  }
`;

const Winner = ({ name }) => (
  <Player playerName={name} width={150} lineWidth={25} color="white" />
);

const Alert = ({
  isOpen,
  onClickButtonOpened,
  onClickButtonClosed,
  containerHeight,
  containerColor,
  buttonIconOpened,
  buttonIconClosed,
  buttonWidth,
  buttonColor,
  winner
}) => (
    <StyledContainer
      isOpen={isOpen}
      height={containerHeight}
      color={containerColor}
    >
      <StyledButton
        onClick={isOpen ? onClickButtonOpened : onClickButtonClosed}
        width={buttonWidth}
        color={buttonColor}
      >
        <i className="material-icons">
          {isOpen ? buttonIconOpened : buttonIconClosed}
        </i>
      </StyledButton>
      <StyledMessage isOpen={isOpen}>
        {winner === 'o' ? (
          <Content>
            {console.log(winner)}
            <Winner name={winner} />
            <StyledMessageText>A maquina venceu!</StyledMessageText>
          </Content>
        ) : winner === 'x' ? (
          <Content>
            <Winner name={winner} />
            <StyledMessageText>Você venceu!</StyledMessageText>
            <a href="/Terceira" style={{ color: 'black' }}>
              <ButtonOrange className='btn'> Você é um anjo de luz! Continue!</ButtonOrange>
            </a>
          </Content>
        ) : (
              <Content>
                <Fragment>
                  <Winner name="x" />
                  <Winner name="o" />
                </Fragment>
                <StyledMessageText>Deu velha!</StyledMessageText>
              </Content>
            )}
      </StyledMessage>
    </StyledContainer>
  );

export default Alert;
