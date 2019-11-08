import styled from 'styled-components'

export const Body = styled.div`
  background: url(${props => props.url});
  padding: 7vh 20vh 3vh 20vh;

  @media (max-width: 700px){
    padding: 8vh 20vh ;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    margin-top: -5vh;
  }
  @media (min-width: 1500px){
    a {
      margin-top: -4vh;
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

export const Content = styled.div`
  height: 90vh;
  display: flex;
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
    width: 90vw;
    margin: 40px 0px 40px 0px;
  }
`;