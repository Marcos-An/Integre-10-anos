import styled from 'styled-components'

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
`;

export const ContentConta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .input{
    margin: -16px 0px 0px 30px;
    height: 50px;
    font-size: 30px;
    color: #55EDD2;
  }
  @media (max-width: 800px) {
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
    font-size: 19px;
  }
`;

export const Mensagem = styled.h1`
  color: #929393;
  font-size: 25px;
  margin-bottom: 20px;
  word-break: break-all;

  @media (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`;