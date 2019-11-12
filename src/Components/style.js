import styled from "styled-components"

export const PlayerWrapper = styled.div`
  position: relative;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 700px){
    padding-top: 0%;
    .react-player {
      position: relative;
    }
  }
`;