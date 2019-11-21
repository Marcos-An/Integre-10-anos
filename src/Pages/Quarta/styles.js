import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: url("/Assets/olinho.gif"),
              url("/Assets/olinho.gif"),
              url("/Assets/olinho.gif"),
              url("/Assets/olinho.gif");
  background-repeat: no-repeat;
  background-size: 50px,
                   70px,
                   50px,
                   30px;
  background-position: right 90vh top 6vh,
                       left 5vh bottom 5vh,
                       right 5vh bottom 40vh,
                       left 5vh top 15vh;
  padding: 7vh 20vh 93vh 20vh;
  .btn{
    margin-top: 10px;
    align-self: center;
  }
  @media (max-width: 700px){
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8vh 0vh 0vh 0vh;
    .btn{
      margin: 20px 0px;
      align-self: center;
    }
  }
  @media (min-width: 1500px){
    padding: 7vh 20vh 80vh 20vh;
    .btn{
      margin: 20px 0px;
      align-self: center;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 180px);
  grid-row-gap: 30px;
  grid-column-gap: 50px;
  align-self: center;

  @media (max-width: 700px){
    grid-template-columns: repeat(2, 140px);
    grid-gap: 20px;
  }
  @media (min-width: 1500px){
    grid-template-columns: repeat(5, 265px);
    grid-column-gap: 60px !important;
  }
`;

export const Foto = styled.div`
  height: 130px;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0px 0px;

  @media (min-width: 1500px){
    height: 210px;
  }
`;

export const FotoZoom = styled.div`
  height: 60%;
  width: 60%;
  background-image: url("${props => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px 5px 0px 0px;
`;

export const Box = styled.div`
  display: flex;  
  justify-content: space-between;  
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  color: #000;
  font-size: 13px;
  margin-top: 15px;
  word-break: break-word;
  font-family: 'Muli', sans-serif;

  @media (max-width: 600px) {
    font-size: 14px;
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
    font-size: 17px;
    text-align: center;
    margin-top: 0px;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
    word-break: break-all;
  }
`;

export const Text = styled.h2`
  color: #000;
  font-size: 18px;
  margin: 0px;
  height: 25px;
  word-break: break-word;
  font-family: 'Muli', sans-serif;

  @media (max-width: 600px) {
    font-size: 18px !important;
    text-align: center;
    margin: 20px 0px 40px 0px;
    padding: 0px 50px;
  }
  @media (min-width: 1500){
    color: black;
    font-size: 32px;
  }
`;
