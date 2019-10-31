import styled from 'styled-components'

export const Boddy = styled.div`
  padding: 20vh;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0px;
    grid-template-columns: 1fr;
  }
`;

export const Meme = styled.div`
  height: 300px;
  width: 300px;
  background-image: url("${(props) => props.url}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Left = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media (max-width: 600px) {
    padding: 25px;
    text-align: center;
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #000;
  width: 85%;
  font-size: 48px;
  margin: 0px;
  word-break: break-all;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 28px;
  }
  @media (min-width: 1500px) {
    font-size: 65px;
  }
`;
export const SubTitle = styled.h2`
  color: #808080;
  width: 60%;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    padding-top: 10px;
    width: 100%;
    font-size: 15px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1500px) {
    padding-top: 10px;
    font-size: 25px;
  }
`;

