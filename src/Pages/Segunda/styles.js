import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-image: url('/Assets/Bg/Triangulo.svg'),
                    url('/Assets/Bg/TrianguloCinza.svg');
  background-position: left 0px bottom 100px,
                       left 500px top 30px;;
  background-repeat: no-repeat;
`;
export const Body = styled.div`
  padding: 20vh 15vh 4vh 15vh;
  height: 87vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  align-items: center;

  @media (max-width: 700px){
    grid-gap: 30px;
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    grid-row-start: 1;
    height: 235px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.h2`
  color: #808080;
  text-align: center;
  padding: 17px; 
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
  background: #808080;

  @media (max-width: 700px){
   display: none;
  }
`;