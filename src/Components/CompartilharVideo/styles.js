import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40vh;
  flex-direction: column;

  @media (max-width: 700px){
    padding-left: 0px;
    align-items: center;
  }
`;

export const Text = styled.h1`
  color: #5C5C5C;
  font-size: 22px;
  margin: 5px 40px 20px 0px;

  @media (max-width: 700px){
    font-size: 20px; 
    margin-bottom: 25px !important ;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px){
    margin-top: 3vh;
  }
`;

export const RedeSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  border-radius: 4px;
  background-color: #fff;
  margin: 0px 10px 0px 0px;
  box-shadow: 0 3px 10px 2px rgba(0,0,0,.2);
`;
