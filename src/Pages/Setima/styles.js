import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 7vh 20vh 93vh 20vh;
  background-repeat: no-repeat;
  background-image: url('/Assets/Bg/Molas.svg'),
                    url('/Assets/Bg/RectangleAzul.svg'),
                    url('/Assets/Bg/Frame.svg');

  background-position: left 67vh top 5vh,
                       right 20vh bottom 5vh,
                       left 10vh bottom 10vh;

  a .btn {
    margin-top: 7vh;
  }

  @media (max-width: 800px){
    padding: 8vh 0vh 0vh 0vh;
    .btn{
      margin: 20px 0px;
    }
  }

  @media (min-width: 1500px){
    padding: 12vh 20vh 80vh 20vh;
    .btn{
      margin: 20px 0px;
      align-self: center;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 180px);
  grid-row-gap: 40px;
  grid-column-gap: 50px;
  align-self: center;

  @media (max-width: 800px){
    grid-template-columns: repeat(2, 140px);
    grid-gap: 20px;
  }
  @media (min-width: 1500px){
    grid-template-columns: repeat(5, 240px);
    grid-column-gap: 60px !important;
  }
`;

export const Foto = styled.div`
  height: 170px;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1500px){
    height: 240px;
  }
`;

export const Box = styled.div`
  display: flex;  
  justify-content: space-between;  
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Modal = styled.div`
  display: none; 
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url("/Assets/bg.png");  
`;

export const Text = styled.h2`
  color: #000;
  font-size: 18px;
  margin: 0px;
  height: 25px;
  word-break: break-word;
  font-family: 'Muli', sans-serif;

  @media (max-width: 800px) {
    font-size: 18px !important;
    text-align: center;
    margin: 20px 0px 40px 0px;
    padding: 0px 50px;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
  }
`;
