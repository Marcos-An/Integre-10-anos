import styled from 'styled-components'

export const Boddy = styled.div`
  padding: 20vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  justify-content: center;  
  background-image: url('/Assets/Bg/Triangulo.svg'), 
                    url('/Assets/Bg/Bolinhas.svg'),
                    url('/Assets/Bg/Molas.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg'),
                    url('/Assets/Bg/BolinhaCinza.svg'),
                    url('/Assets/Bg/Rectangle.svg');

  background-position: left 50px top 100px,
                       right 40px bottom 45px,
                       left 50px bottom 20px,
                       right 650px top 40px,
                       right 100px top 20px,
                       left 500px bottom 100px;
  background-repeat: no-repeat;

  @media (min-width: 1500px) {
    background-image: url('/Assets/Bg/Triangulo.svg'), 
                      url('/Assets/Bg/Bolinhas.svg'),
                      url('/Assets/Bg/Molas.svg'),
                      url('/Assets/Bg/BolinhaCinza.svg'),
                      url('/Assets/Bg/BolinhaAzul copy.svg'),
                      url('/Assets/Bg/Rectangle.svg');

  background-position: left 90px top 150px,
                       right 40px bottom 45px,
                       left 90px bottom 100px,
                       right 250px top 20px,
                       right 900px top 50px,
                       left 700px bottom 200px;
  }
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
  
  .Loguinho{
    position: absolute;
    top: -8%;
  }
  .btn{
    margin-top: 30px;
    @media (max-width: 700px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  
`;

export const Left = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-self: center;

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
  
  @media (max-width: 600px) {
    flex-direction: column;
    height: 486px;
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
  margin: 0px;
  word-break: break-word;

  @media (max-width: 600px) {
    width: 100%;
    line-height: 35px;
    font-size: 28px;
  }
  @media (min-width: 1500px) {
    width: 60%;
    font-size: 50px;
  }
`;
export const SubTitle = styled.h2`
  color: #808080;
  width: 40%;
  font-weight: 300;
  font-family: 'Muli', sans-serif;
  word-break: break-word;
  font-size: 20px;
  margin: 20px 0px 50px 0px;

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