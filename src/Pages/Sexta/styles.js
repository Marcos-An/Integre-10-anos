import styled from 'styled-components'

export const Content = styled.div`
  background: url(${props => props.url});
  padding: 7vh 20vh 3vh 20vh;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .video{
    justify-self: flex-start;
    align-self: flex-start;
  }

  @media (max-width: 700px){
    text-align: center;
    padding: 8vh 20vh ;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 50vw;
  margin-top: 5vh;

  a {
    margin-top: -5vh;
  }
  @media (min-width: 1500px){
    a {
      margin-top: -4vh;
    }
  }
  @media (max-width: 700px){
    align-items: center;
    a {
      margin-top: 5vh;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-self: center;
  width: 100%;

  @media (max-width: 700px){
    justify-items: center;
    align-items: center;
    flex-direction: column !important;
  }
  @media (min-width: 1500px){
    justify-content: center;
    margin-left: -10vh;
  }
`;

export const BoxNext = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  margin-top: 10vh;

  @media (max-width: 700px){
    justify-items: center;
    align-items: center;
    flex-direction: column !important;
  }
`;

export const VideoContent = styled.div`
  margin-top: 5vh;
  width: 50vw;

  @media (max-width: 700px){
    width: 100vw;
  }
`;