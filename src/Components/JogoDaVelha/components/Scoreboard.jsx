import React from "react";
import styled from "styled-components";
import Player from "./Player.jsx";

const StyledContainer = styled.div`
  display: flex;
  margin-top: -30px;
`;

const StyledPlayerContainer = styled.div`
  padding: 10px 10px;
  background-color: ${props => props.background};
 
  // Centralize the player icon
  div {
    margin: 0 auto;
  }
`;

const StyledScoreContainer = styled.div`
  padding: 10px 10px;
  font-size: ${props => props.width / 2}px;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: ${props => props.background};
`;

const Scoreboard = ({
  width,
  playerName,
  playerColor,
  playerBackground,
  scoreBackground,
  score = 0
}) => (
    <StyledContainer>
      <StyledPlayerContainer width={width} background={playerBackground}>
        <Player
          playerName={playerName}
          width={width - 20}
          lineWidth={width / 8}
          color={playerColor}
        />
      </StyledPlayerContainer>
      <StyledScoreContainer width={width} background={scoreBackground}>
        {score}
      </StyledScoreContainer>
    </StyledContainer>
  );

export default Scoreboard;
