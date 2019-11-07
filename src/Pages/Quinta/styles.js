import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 12vh 20vh 4vh 20vh;

  background-image: url('/Assets/Bg/Circulo.svg'),
                    url('/Assets/Bg/Triangulo.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg');

  background-position: left 10vh bottom 0vh,
                       right 40vh top 5vh,
                       right 50px bottom 30px;

  background-repeat: no-repeat;

  @media (max-width: 700px){
    background-image: none;
    padding: 4vh 0vh;
  }
  .btn{
    display: none;
    
    @media (max-width: 700px){
      display: flex;
      justify-self: center;
      margin: 30px;
    }
  }
  .btn1{
    margin: 6vh 0px 2vh 0px;

    @media (max-width: 700px){
      display: none;
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  height: 100vh;  
  align-items: center;

  @media (max-width: 700px){
    grid-gap: 30px;
    grid-template-columns: 1fr;
    padding: 0px;
  }
  @media (min-width: 1500px){
    grid-gap: 30px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: 30vh;
  @media (max-width: 700px) {
    align-self: center;
  }
  @media (min-width: 1500px) {
    height: 20vh;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url("/Assets/meme-twitter.gif");
  background-size: contain;
  background-repeat: no-repeat;
  
  @media (max-width: 600px) {
    flex-direction: column;
    grid-row-start: 1;
    height: 60vh;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Esquerda{
    align-self: flex-start;
  }
  .Direita{
    align-self: flex-end;
  }

`;

export const Text = styled.p`
  color: #4B4949;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 20px; 
  font-weight: 300;
  font-family: 'Muli', sans-serif;

  @media (max-width: 700px){
    font-size: 17px;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 700px){
    height: 60vh;
    width: 100%;
  }
`;