import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 70px;
  border-radius: 20px; 
  box-shadow: 0 3px 10px 2px rgba(0,0,0,.1);
  font-size: 17px;
  border: none;
  background: #55EDD2;

  @media (min-width: 1500px) {
    padding: 15px 75px; 
    font-size: 22px;
  }
`;