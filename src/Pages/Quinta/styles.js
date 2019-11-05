import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-image: url('/Assets/Bg/Circulo.svg'),
                    url('/Assets/Bg/Triangulo.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg');

  background-position: left 20px bottom 0px,
                       right 200px top 30px,
                       right 50px bottom 30px;

  background-repeat: no-repeat;

  @media (max-width: 700px){
    background-image: none;
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
    margin: 20px 0px 40px 0px;

    @media (max-width: 700px){
      display: none;
    }
  }
  @media (min-width: 1500px) {
    background-image: url('/Assets/Bg/Triangulo.svg'),
                      url('/Assets/Bg/TrianguloCinza.svg'),
                      url('/Assets/Bg/BolinhaAzul.svg');

  background-position: left 30px bottom 100px,
                       right 200px top 30px,
                       right 50px bottom 30px;
  }

`;
export const Body = styled.div`
  padding: 20vh 15vh 4vh 15vh;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  align-items: center;

  @media (max-width: 700px){
    grid-gap: 30px;
    grid-template-columns: 1fr;
    padding: 0px;
    height: 50vh;
  }
  @media (min-width: 1500px){
    grid-gap: 30px;
    height: 744px;
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
    height: 80vh;
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
  color: #808080;
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