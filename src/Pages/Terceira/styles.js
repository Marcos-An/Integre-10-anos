import styled from 'styled-components'

export const Body = styled.div`
  background: url(${props => props.url});
  padding: 7vh 20vh 0vh 20vh;

  @media (max-width: 800px){
    padding: 8vh 20vh ;
  }
`;

export const Content = styled.div`
  height: 100vh;
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
  }
`;

export const VideoContent = styled.div`
  margin-top: 5vh;

  @media (max-width: 800px){
    width: 100vw;
  }
`;

export const Text = styled.h3`
  color: #5C5C5C;
  font-family: 'Muli', sans-serif;
  margin: 20px 0px 30px 0px;
  width: 40vw;
  
  @media (max-width: 800px){
    width: 80vw;
  }
`;