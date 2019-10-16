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
  grid-template-columns: repeat(5, 250px);
  grid-gap: 30px;
  padding: 40px;
`;

export const Foto = styled.div`
  height: 250px;
  background-color: black;
  background-image: url(${props => props.imagem});
  border-radius: 10px;
`;

export const Text = styled.h2`
  color: black;
  font-size: 32px;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`;