import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 70px;
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 17px;
  border: none;
  background: #55EDD2;

  @media (min-width: 1500px) {
    padding: 15px 75px; 
    font-size: 22px;
  }
`;

export const ButtonOrange = styled.button`
  padding: 10px 70px;
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 17px;
  border: none;
  background: #edce5d;

  @media (max-width: 700px) {
    padding: 0px 48px !important; 
    width: 138%;
    margin-left: -12%;
    font-size: 15px;
  }
  @media (min-width: 1500px) {
    padding: 15px 75px; 
    font-size: 22px;
  }
`;