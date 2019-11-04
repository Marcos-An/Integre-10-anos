import React from "react";
import styled from "styled-components";

// Calculate the hypotenuse of an isosceles triangle.
const calcHyp = leg => Math.sqrt(leg ** 2 * 2);
const players = [
  "/Assets/velha/kati.png",
  "/Assets/velha/julia.png",
  "/Assets/velha/matheus.png",
  "/Assets/velha/carol.png",
  "/Assets/Meme/cabeca1.png",
  "/Assets/Meme/cabeca2.jpeg",
]
const index1 = Math.floor((Math.random() * 3))
const index2 = Math.floor((Math.random() * (6 - 3) + 3))
const StyledPlayerX = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background: url(${players[index1]});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: ${props => calcHyp(props.width) - props.lineWidth}px;
    height: ${props => props.lineWidth}px;
    left: 50%;
    top: 50%;
    transform-origin: left top;
  }
  &::before {
    /* From left to right.
       From bottom to top. */
    transform: rotate(45deg);
    transform: scale(2);
  }
  &::after {
    /* From right to left.
       From top to bottom. */
    transform: rotate(-45deg);
    transform: scale(2);
  }
`;

const StyledPlayerO = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-color: ${props => props.colorPlayerO || props.color};
  border-width: ${props => props.lineWidth}px;
  background: url(${players[index2]});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledContainer = styled.div`
  display: inline-block;
`;

const Player = ({ playerName, ...props }) => {
  switch (playerName) {
    case "x":
      return (
        <StyledContainer>
          <StyledPlayerX {...props} />
        </StyledContainer>
      );

    case "o":
      return (
        <StyledContainer>
          <StyledPlayerO {...props} />
        </StyledContainer>
      );

    default:
      throw new Error("Invalid player name");
  }
};

export default Player;
