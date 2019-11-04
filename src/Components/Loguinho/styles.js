import styled from 'styled-components'

export const Imagem = styled.img`
  position: absolute;
  top: ${props => props.top};
  
  @media(max-width: 700px){
    padding: 10px;
    position: relative;
    top: 0;
    left: 0;
  }
`;