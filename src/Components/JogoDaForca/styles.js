import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  justify-items: center;
  align-items: center;
  height: 81vh;

  @media (max-width: 700px){
    height: 100vh;
    padding: 0px;
    margin-top: -45px;
    grid-template-columns: 1fr;
    align-items: flex-end;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`;

export const PalavraBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 700px){
    justify-items: center;
  }
`;

export const Palavra = styled.div`
  display: flex;
  justify-content: center;
`;

export const LetraErrada = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 5vh;
  @media(max-width: 700px){
    display: block;
    padding-bottom: 10px;  
  }
`;

export const Letra = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: #ddd;
  margin-right: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  text-transform: uppercase;

  @media(max-width: 700px){
    height: 40px;
    width: 30px;
    font-size: 28px;
    margin-right: 10px;
  }
`;

export const Erradas = styled.h3`
  color: #9e9b9b;
  margin-right: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  animation-name: errada;
  animation-duration: 0.5s;

  @keyframes errada {
  25%  {
    color: #ff3c2e;
    font-size: 37px;
    }
  50%  {
    color: #c96059;
    font-size: 34px;
    }
  100% {
    color: #9e9b9b;
    font-size: 30px;
  }
}

  @media(max-width: 700px){
    margin-right: 0px;
    font-size: 19px;
    @keyframes example {
      0%  {
        color: #ff3c2e;
        font-size: 23px;
        }
        50%  {
        color: #c96059;
        font-size: 20px;
        }
      100% {
        color: #9e9b9b;
        font-size: 19px;
      }
    }
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 700px){
    flex-direction: row;
    justify-items: center;
    padding-top: 20px;
  }
`;

export const Buttons = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 4px 12px;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  background-color: #d2fff6;
  color: #333;
  font-weight: 600;

  @media(max-width: 700px){
    padding: 3px 9px;
    font-size: 16px;
  }
`;

export const Dica = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
  background: #069367;

  @media(max-width: 700px){   
    font-size: 15px;
    width: 280px;
    justify-content: center;
  }
`;

export const TextDica = styled.h4`
  margin: 0px;
  color: #fff;

`;
export const Acertou = styled.div`
  margin: 8vh 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  h1{
    margin-bottom: 40px;
  }
  @media (max-width: 700px){
    height: 18vh;
  }
`;
