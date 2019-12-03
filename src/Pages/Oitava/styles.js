import styled from 'styled-components'

export const Body = styled.div`
  background: url(${props => props.url});
  padding: 7vh 20vh 0vh 20vh;
  @media (max-width: 800px){
    padding: 8vh 20vh ;
  }
  `;
export const Content = styled.div`
  height: 93vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  .video{
    justify-self: flex-start;
    align-self: flex-start;
  }

  @media (max-width: 800px){
    text-align: center;
    padding: 0px 10px 50px 10px;
  }
`;

export const VideoContent = styled.div`
  margin: 5vh;
  width: 50vw;

  @media (max-width: 800px){
    width: 100vw;
    margin-bottom: 0vh;
    height: 36vh; 
  }
`;