import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  justify-content: center;
  grid-gap: 30px;
  padding: 20px 40px 60px 40px;
 
  @media (max-width: 700px){
    grid-template-columns: repeat(2, 150px);
    grid-gap: 20px;
  }
  @media (min-width: 1500){
    grid-template-columns: repeat(5, 250px);
    grid-gap: 30px;
    padding: 40px
  }
`;

export const Foto = styled.div`
  height: 170px;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
`;

export const Text = styled.h2`
  color: #6B6B6B;
  font-size: 25px;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;