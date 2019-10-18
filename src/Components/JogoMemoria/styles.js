import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-gap: 30px;
  
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
  height: 170px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);
  transform: scale(1);

  :active{
    transform: scale(0.97);
    transition: transform .3s;
  }
  .front-face,
  .back-face {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    border-radius: 10px;
    background: #fff;
  }
  @media (max-width: 600px) {
  .front-face,
  .back-face {
    width: 100%;
    height: 80%;
    padding: 20px;
    position: absolute;
    border-radius: 10px;
    background: #fff;
  }
  }
`;

export const Card = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.26);
  transform: scale(1);
  
  :active{
    transform: scale(0.97);
    transition: transform .3s;
  }
  .front-face,
  .back-face {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    border-radius: 10px;
    background: #fff;
  }
  @media (max-width: 600px) {
  .front-face,
  .back-face {
    width: 100%;
    height: 80%;
    padding: 20px;
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