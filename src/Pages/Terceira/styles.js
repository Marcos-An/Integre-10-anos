import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 210px);
  justify-content: center;
  grid-gap: 20px;
 
  @media (max-width: 700px){
    grid-template-columns: repeat(2, 150px);
    grid-gap: 20px;
  }
  @media (min-width: 1500){
    grid-template-columns: repeat(5, 250px);
    grid-gap: 30px;
    padding: 40px
  }
`;


export const Foto = styled.div`
  height: 170px;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0px 0px;
  
`;

export const FotoZoom = styled.div`
  height: 40%;
  width: 40%;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px 5px 0px 0px;
`;

export const Modal = styled.div`
  display: none; 
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url("/Assets/bg.png");
`;

export const Close = styled.span`
  position: absolute;
  font-family: 'Muli', sans-serif;
  top: 15px;
  right: 35px;
  color: #000;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
`;

export const Description = styled.h2`
  color: #6B6B6B;
  font-size: 13px;
  margin-top: 10px;
  word-break: break-word;
  font-family: 'Muli', sans-serif;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;
export const DescriptionZoom = styled.h2`
  color: #000;
  font-size: 17px;
  margin-top: 20px;
  font-weight: 300px;
  font-family: 'Muli', sans-serif;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;

export const Text = styled.h2`
  color: #6B6B6B;
  font-size: 18px;
  margin-left: 9%;
  margin-bottom: 30px;
  word-break: break-all;
  align-self: flex-start;
  font-family: 'Muli', sans-serif;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;
