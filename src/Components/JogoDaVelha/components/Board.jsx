import React from "react";
import styled from "styled-components";
import Player from "./Player.jsx";

const StyledGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${props => props.width}px;
  background-color: ${props => props.color};
`;

const StyledGridItem = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  cursor: pointer;
  background-color: ${props => props.color};

  > div {
    position: absolute;
    animation: show-player 0.15s;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes show-player {
      from {
        transform: translate(-50%, -50%) scale(2);
      }
      to {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`;

const Board = ({
  board,
  onClick,
  cellWidth,
  borderWidth,
  borderColor,
  colorPlayerX,
  colorPlayerO
}) => (
    <StyledGrid width={borderWidth} color={borderColor}>
      {board.map((playerName, index) => (
        <StyledGridItem
          key={index}
          width={cellWidth}
          color={index % 2 !== 1 ? '#c9c9c9' : '#F8F8F8'}
          onClick={() => onClick(index)}
        >
          {playerName ? (
            <Player
              playerName={playerName}
              lineWidth={borderWidth}
              width={cellWidth + 12}
              colorPlayerX={colorPlayerX}
              colorPlayerO={colorPlayerO}
            />
          ) : null}
        </StyledGridItem>
      ))}
    </StyledGrid>
  );

export default Board;
