import styled from 'styled-components'

export const Body = styled.div`
  background: url(${props => props.url});
  padding: 7vh 20vh 0vh 20vh;
  @media (max-width: 700px){
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

  @media (max-width: 700px){
    text-align: center;
    padding: 0px 10px 50px 10px;
  }
`;

export const VideoContent = styled.div`
  margin-top: 5vh;
  height: 50vh; 
  width: 50vw;

  @media (max-width: 700px){
    width: 100vw;
  }
`;

export const Text = styled.h3`
  color: #5C5C5C;
  font-family: 'Muli', sans-serif;
  margin: 20px 0px 30px 0px;
  width: 50vw;
  
  @media (max-width: 700px){
    width: 80vw;
  }
`;