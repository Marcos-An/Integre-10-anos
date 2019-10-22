import styled from 'styled-components'

export const Content = styled.div`
  height: 100vh;
  padding: 30px 50px 50px 50px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  .video{
    justify-self: flex-start;
    align-self: flex-start;
  }

  @media (max-width: 700px){
    text-align: center;
    padding: 0px 50px 50px 50px;
  }
`;

export const VideoContent = styled.div`
  height: 65vh; 
  width: 70vw;
  margin-bottom: 40px;

  @media (max-width: 700px){
    width: 100vw;
  }
`;

export const Text = styled.h3`
  color: #5C5C5C;
  margin: 30px 0px;
  width: 50vw;
  
  @media (max-width: 700px){
    width: 80vw;
  }
`;