import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-image: url('/Assets/Bg/Triangulo.svg'),
                    url('/Assets/Bg/TrianguloCinza.svg'),
                    url('/Assets/Bg/BolinhaAzul.svg');

  background-position: left 0px bottom 100px,
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
  padding: 20vh 20vh 4vh 20vh;
  height: 100vh;
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
    height: 99vh;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    margin: -13vh 0vh 5vh 0vh;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    grid-row-start: 1;
    height: 80vh;
    div {
      margin: 4vh 0vh 2vh 0vh;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -5vh;
    height: 100px;
    @media (min-width: 1500px) {
      margin-top: 0vh;
      height: 150px;
      width: 150px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Text = styled.h2`
  color: #4B4949;
  text-align: center;
  padding: 17px; 
  font-weight: 300;
  font-family: 'Muli', sans-serif;
  margin-top: -5vh;
  @media (max-width: 700px){
    margin-top: 0vh;
    font-size: 17px;
  }
  @media (min-width: 1500px){
    margin-top: -50px;
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