import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 140px);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  
  @media (max-width: 700px){
    grid-template-columns: repeat(2, 150px);
    grid-gap: 20px;
  }
  @media (min-width: 1500px){
    grid-template-columns: repeat(5, 250px);
    grid-gap: 30px;
    padding: 40px
  }
`;

export const Foto = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  position: relative;
  transform: scale(1);

  .front-face{
    width: 100%;
    height: 100%;
    background: #fff;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
  }

  .back-face {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
  @keyframes transform {
    0% { transform: rotateY(0deg) }
    100% { transform: rotateY(180deg) }
  }

  @media (max-width: 600px) {
  .front-face,
  .back-face {
    width: 100%;
    height: 80%;
    position: absolute;
    border-radius: 10px;
    background: #fff;
  }
  }
`;

export const Text = styled.h2`
  color: #6B6B6B;
  font-size: 25px;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500px){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;