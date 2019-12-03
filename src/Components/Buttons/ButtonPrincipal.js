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
  @media (max-width: 800px) {
    padding: 10px 40px;
    font-size: 15px;
  }
`;
export const ButtonInicio = styled.button`
  padding: 10px 70px;
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 17px;
  border: none;
  color: #fff;
  background: rgb(54, 97, 207);

  @media (min-width: 1500px) {
    padding: 15px 75px; 
    font-size: 22px;
  }
  @media (max-width: 800px) {
    padding: 10px 40px;
    font-size: 15px;
  }
`;

export const ButtonShare = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 17px;
  border: none;
  margin-right: 5vh;

  @media (max-width: 700px){
    margin-right: 0vh;
    padding: 7px 0px 7px 6px ;
  }
  @media (min-width: 1500px) {
  }
`;

export const ButtonShare2 = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px;
  font-family: 'Muli', sans-serif;
  color: #3661CF;
  font-weight: 700;
  font-size: 17px;
  border: none;

  @media (max-width: 700px){
    margin-right: 0vh;
    padding:  0px;
  }
  @media (min-width: 1500px) {
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