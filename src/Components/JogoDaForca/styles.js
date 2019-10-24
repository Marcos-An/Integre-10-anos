import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  justify-items: center;
  align-items: flex-start;
  height: 78vh;

  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;
export const PalavraBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Palavra = styled.div`
  display: flex;
  justify-content: center;
`;
export const LetraErrada = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;  
`;
export const Letra = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-bottom:2px solid gray;
  margin-right: 10px;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Erradas = styled.span`
  color: red;
  margin-right: 10px;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
`;

export const ContentButtons = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
    margin-bottom: 10px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 4px 12px;
  border-width: 1px;
  border-style: solid;
  font-size: 20px;
  border-radius: 5px;
  background-color: rgb(230, 230, 230);
  color: #333;
  font-weight: 600;
`;
