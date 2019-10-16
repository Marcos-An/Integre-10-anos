import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Botao{
    margin: -20px 0px 50px 0px; 
  }
`;
export const Body = styled.div`
  height: 80vh;
  display: grid;
  padding: 70px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px){
    grid-template-columns: 1fr
  }
`;

export const Left = styled.div`
  height: 100%;
  width: 100%;
`;

export const Center = styled.div`
`;

export const Text = styled.h2`
  color: #808080;
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #808080;
`;