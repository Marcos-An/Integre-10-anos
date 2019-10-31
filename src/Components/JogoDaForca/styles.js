import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  justify-items: center;
  align-items: flex-start;
  height: 78vh;

  @media (max-width: 700px){
    height: 102vh;
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
  padding-bottom: 100px;  

  @media(max-width: 700px){
    display: block;
    padding-bottom: 10px;  
  }
`;

export const Letra = styled.div`
  display: inline-block;
  width: 25px;
  height: 50px;
  border-bottom:2px solid gray;
  margin-right: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;

  @media(max-width: 700px){
    height: 40px;
    margin-right: 10px;
  }
`;

export const Erradas = styled.h3`
  color: #9e9b9b;
  margin-right: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  animation-name: errada;
  animation-duration: 0.5s;

  @keyframes errada {
  25%  {
    color: #ff3c2e;
    font-size: 47px;
    }
  50%  {
    color: #c96059;
    font-size: 45px;
    }
  100% {
    color: #9e9b9b;
    font-size: 40px;
  }
}

  @media(max-width: 700px){
    margin-right: 0px;
    font-size: 25px;
    @keyframes example {
      0%  {
        color: #ff3c2e;
        font-size: 32px;
        }
      25%  {
        color: #ff3c2e;
        font-size: 30px;
        }
      50%  {
        color: #c96059;
        font-size: 28px;
        }
        50%  {
        color: #c96059;
        font-size: 26px;
        }
      100% {
        color: #9e9b9b;
        font-size: 25px;
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
  border-radius: 5px;
  box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.7);
  background-color: white;
  color: #333;
  font-weight: 600;

  @media(max-width: 700px){
    padding: 3px 9px;
    font-size: 16px;
  }
`;

export const Dica = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 60px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 15px -4px rgba(0,0,0,0.32);

  @media(max-width: 700px){   
    margin-top: -60px;
    margin: 15px 0px ;
    font-size: 18px;
    justify-content: center;
  }
`;

export const TextDica = styled.h5`

`;

export const Text = styled.h5`
  margin-left: 5px;
`;

export const Acertou = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    margin-bottom: 40px;
  }
`;
