import styled from 'styled-components'

export const Boddy = styled.div`
  padding: 20vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  justify-content: center;  
  background-image: url('/Assets/Bg/Triangulo.svg'), 
                    url('/Assets/Bg/Bolinhas.svg'),
                    url('/Assets/Bg/Molas.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg'),
                    url('/Assets/Bg/BolinhaCinza.svg'),
                    url('/Assets/Bg/Rectangle.svg');

  background-position: left 5vh top 15vh,
                       right 3vh bottom 6vh,
                       left 10vh bottom 2vh,
                       right 90vh top 5vh,
                       right 20vh top 4vh,
                       left 80vh bottom 10vh;
              
  background-repeat: no-repeat;

  
  @media (max-width: 700px) {
    background-image: url('/Assets/Bg/TrianguloMb.svg'), 
                      url('/Assets/Bg/Bolinhas.svg'),
                      url('/Assets/Bg/BolinhaAzulMb.svg'),
                      url('/Assets/Bg/BolinhaCinza.svg'),
                      url('/Assets/Bg/Rectangle.svg');

  background-position: right 0px top 10px,
                       right 60px bottom 40px,
                       left 20px top 70px,
                       right 30px top 230px,
                       left 700px bottom 200px;
                       height: 100%;
                       padding: 0px;
                       grid-template-columns: 1fr;
  }

  @media (min-width: 1500px) {
    background-image: url('/Assets/Bg/TrianguloBig.svg'), 
                    url('/Assets/Bg/Bolinhas.svg'),
                    url('/Assets/Bg/Molas.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg'),
                    url('/Assets/Bg/BolinhaCinza.svg'),
                    url('/Assets/Bg/Rectangle.svg');
  
  background-position: left 5vh top 15vh,
                        right 3vh bottom 6vh,
                        left 10vh bottom 2vh,
                        right 90vh top 5vh,
                        right 20vh top 4vh,
                        left 80vh bottom 10vh;
  }
  `;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 25px;
    text-align: center;
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 18px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 486px;
  }
  @media (min-width: 1500px) {
    padding: 4px 0px !important;
  }
`;

export const Title = styled.h1`
  color: #000;
  width: 70%;
  font-family: 'Muli', sans-serif;
  font-style: Black Italic;
  font-size: 40px;
  line-height: 54px;
  font-weight: 900;
  word-break: break-word;

  @media (max-width: 600px) {
    width: 100%;
    line-height: 35px;
    font-size: 28px;
  }
  @media (min-width: 1500px) {
    width: 70%;
    font-size: 50px;
  }
`;

export const SubTitle = styled.h2`
  color: #4B4949;
  width: 40%;
  font-weight: 300;
  font-family: 'Muli', sans-serif;
  word-break: break-word;
  font-size: 20px;
  margin: 20px 0px 0px 0px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0px 50px;
    margin: 20px 0px 10px 0px;
    font-size: 17px;
    grid-template-columns: 1fr;
    text-align: center;
    align-self: center;
  }
  @media (min-width: 1500px) {
    padding-top: 10px;
    font-size: 25px;
  }
`;