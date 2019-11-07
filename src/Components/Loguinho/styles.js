import styled from 'styled-components'

export const Imagem = styled.img`

  top: ${props => props.top};
  margin-left: ${props => props.left};
  height: 60px;
  align-self: flex-start;

  @media(max-width: 700px){
    height: 40px;
    margin-bottom: 20px;
    align-self: center;
    top: 0;
    left: 0;
  }
  
  @media(min-width: 1500px){
    height: 70px;
  }
`;