import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .input{
    margin: -15px 0px 0px 30px;
    height: 50px;
    font-size: 30px;
    color: #55EDD2;
  }
  @media (max-width: 600px) {
    .input{
      margin: -15px 0px 0px 20px;
      height: 35px;
      font-size: 22px;
    }
  }
`;
export const Conta = styled.h1`
  color: #000;
  font-size: 58px;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 29px;
  }
`;