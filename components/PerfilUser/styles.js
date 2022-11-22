import styled from "styled-components";

const MainPerfil = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #151515;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ImagePerfil = styled.div`
  img {
    margin-left: 5px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
`;

const BoxText = styled.div`
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitlePerfil = styled.div`
  font-family: "Lato", sans-serif;
  color: white;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export { MainPerfil, ImagePerfil, BoxText, TitlePerfil };
