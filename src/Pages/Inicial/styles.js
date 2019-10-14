import styled from 'styled-components'

export const Boddy = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0px;
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 50px 0px 70px 0px;
    text-align: center;
    align-items: center;
    .Youtube{
      width: 80%;
      height: 80%;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .Youtube{
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    .Youtube{
      width: 80%;
      height: 80%;
    }
  }
`;

export const Title = styled.h1`
  color: #000;
  width: 86%;
  font-size: 48px;
  margin: 0px;
  word-break: break-all;

  @media (max-width: 600px) {
    width: 90%;
    font-size: 28px;
  }
`;
export const SubTitle = styled.h3`
  color: #808080;
  width: 60%;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    padding: 0px;
    grid-template-columns: 1fr;
  }
`;

